import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { CreateUserDto, UpdateUserDto } from './dto';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService){

    }
    /*
    @Get() //Recupera todos los usuarios
       getUsers():String{
        return "Hello from UsersController"
    }

    */

    /*0- Parametros tipo Query
https://www.youtube.com/watch?v=ur9DDj-kkQM&list=PLzHaXzj_WAym4WR3gBYuy1iew5T3NgL0v&index=26
quiero los usuarios de sean de caracas y deben estar ordenados por edad
/users?orderBy=City&searchTerm=age

    */
@Get() 
       getUsers(@Query() filtroConsulta):User[]{
        const {searchTerm, orderBy} = filtroConsulta
        return this.userService.getUsers();
        
    }


    /*
    1- Acciones de mantenimiento
    https://www.youtube.com/watch?v=bgL3oPlg1v0&list=PLzHaXzj_WAym4WR3gBYuy1iew5T3NgL0v&index=25
    Los parametros nos ayudan a recibir información desde el cliente de una forma simple
    */
    @Get(':id') //users/1
    getUser(@Param('id') id:string):User{
        return this.userService.getUser(id)
    }

    /*
    3- Transformacion de data en DTO; ver en (06:46)
    https://www.youtube.com/watch?v=QUWilnAp45M&list=PLzHaXzj_WAym4WR3gBYuy1iew5T3NgL0v&index=33&t=336s
    */
    @Post()
    createUser(@Body() message: CreateUserDto){
        /*
        Transformacion de data en DTO ver en (10:30)
        */
        console.log(message instanceof CreateUserDto)
        return this.userService.createUser(message);
    }

    //Con el @Body(), definimos que propiedades vamos a actualizar del usuario, claro hay que enviarlo desde el cliente
    @Patch(':id')
    updateUser(@Param('id') id:string, @Body('message') user:UpdateUserDto){
        return this.userService.updateUser(id, user)
    }

    @Delete(':id')
    removeUser(@Param('id') id:string):void{
        return this.userService.removeUser(id);
    }

}


/*
2-
https://www.youtube.com/watch?v=gsEqU_OFx8Y&list=PLzHaXzj_WAym4WR3gBYuy1iew5T3NgL0v&index=27
*/