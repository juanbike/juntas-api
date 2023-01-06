import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';


@Controller('users')


export class UsersController {
    /*
    @Get() //Recupera todos los usuarios
       getUsers():String{
        return "Hello from UsersController"
    }

    */

    /* Parametros tipo Query
https://www.youtube.com/watch?v=ur9DDj-kkQM&list=PLzHaXzj_WAym4WR3gBYuy1iew5T3NgL0v&index=26
quiero los usuarios de sean de caracas y deben estar ordenados por edad
/users?orderBy=City&searchTerm=age

    */
@Get() 
       getUsers(@Query() filtroConsulta):String{
        const {searchTerm, orderBy} = filtroConsulta
        return `Todas ${searchTerm} usuarios estan ordenados por ${orderBy}`
    }


    /*
    25. Nest.js de 0 - 100: Acciones de mantenimiento
    https://www.youtube.com/watch?v=bgL3oPlg1v0&list=PLzHaXzj_WAym4WR3gBYuy1iew5T3NgL0v&index=25
    Los parametros nos ayudan a recibir información desde el cliente de una forma simple
    */
    @Get(':id') //users/1
    getUsers1(@Param() params):string{
        return `El ID del usuario es ${params.id}`
    }

    @Post()
    createUser(@Body('message') message: string):string{
        return `El mensaje es ${message}`
    }

    //Con el @Body(), definimos que propiedades vamos a actualizar del usuario, claro hay que enviarlo desde el cliente
    @Patch(':id')
    updateUser(@Param('id') id:string, @Body() age, address){
        return `El usuario con el Id${id} a sido actualizado`
    }

    @Delete(':id')
    deleteUser(@Param('id') id:string){
        return `El usuario con el Id${id} a sido eliminado`
    }

}

