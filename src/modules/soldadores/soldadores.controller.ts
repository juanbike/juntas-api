import { Controller, Get, Param, Post, Body, Patch, Delete, Query } from '@nestjs/common';
import { Soldador } from './soldadores.entity';
import { SoldadoresService } from './soldadores.service';


/*
6- Parametros de tipo query
https://www.youtube.com/watch?v=ur9DDj-kkQM&list=PLzHaXzj_WAym4WR3gBYuy1iew5T3NgL0v&index=26
7- Servicios 
*/
@Controller('soldadores')
export class SoldadoresController {
    constructor(private readonly soldadoresService: SoldadoresService){}
   @Get()
    getSoldadores(@Query() filterQuery): Soldador[]{
        const {searchTerm, orderBy } = filterQuery;
        return this.soldadoresService.getSoldadores()
    }

    @Get(':id')
    getSoldador(@Param('id') id:string):Soldador{
        return  this.soldadoresService.getSoldador(id);
    }

    /*
    4- Cuerpo de una peticion http
    https://www.youtube.com/watch?v=xi13tuVTvAc&list=PLzHaXzj_WAym4WR3gBYuy1iew5T3NgL0v&index=24&t=162s
    */
    @Post()
    createSoldador(@Body() name: string, salary: number, address: string){
        return this.soldadoresService.createSoldador(name, salary, address);
    }

    /*
    En el Body recibimos la informacion que queremos actualizar
    5- Acciones de mantenimiento (Crud)
    https://www.youtube.com/watch?v=bgL3oPlg1v0&list=PLzHaXzj_WAym4WR3gBYuy1iew5T3NgL0v&index=25
    */
   @Patch(':id')
    updateSoldador(@Param('id') id: string, name: string, salary: number, address: string, @Body() Soldador): Soldador{
        return this.soldadoresService.updateSoldador(id,name,salary,address);
    }

    @Delete(':id')
    removeSoldador(@Param('id') id: string): void{
        return this.soldadoresService.removeSoldador(id)
    }
}
