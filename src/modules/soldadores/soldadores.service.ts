import { Injectable, NotFoundException } from '@nestjs/common';
import { Soldador } from './soldadores.entity';

@Injectable()
export class SoldadoresService {
    private soldadores: Soldador[]= [
        {
            id: '1',
            name: "Juan Carlos Arteaga Ochoa",
            salary: 56,
            address: "Los Cortijos de Oriente"
        }
    ];



    getSoldadores():Soldador[]{
        return this.soldadores;
    }


    getSoldador(id: string):Soldador{
        const soldador = this.soldadores.find((item) => item.id === id);

        if(!soldador){
            throw new NotFoundException('Usuario no encontrado')
        }

        /*
        Si no existe el usuario
        https://www.youtube.com/watch?v=RlWn0hHZpzI&list=PLzHaXzj_WAym4WR3gBYuy1iew5T3NgL0v&index=28
        */
        return soldador;
    }

    /*
    Transformacion de data en DTO: mirar en el minuto 8
    https://www.youtube.com/watch?v=QUWilnAp45M&list=PLzHaXzj_WAym4WR3gBYuy1iew5T3NgL0v&index=33&t=336s
    */
    createSoldador(name:string, salary:number, address:string){
        return this.soldadores.push({
            id: (Math.floor(Math.random() * 2000) + 1).toString(), name, salary, address
        });
    }

    updateSoldador(id:string, name:string, salary:number, address:string){
        const soldador: Soldador= this.getSoldador(id);
        soldador.name = name;
        soldador.salary = salary;
        soldador.address = address
        
        return soldador;
    }

    removeSoldador(id:string){
        const index = this.soldadores.findIndex((user) => user.id === id);
        if(index >= 0){
            this.soldadores.splice(index,1)
        }
    }



}

/*
https://www.youtube.com/watch?v=gsEqU_OFx8Y&list=PLzHaXzj_WAym4WR3gBYuy1iew5T3NgL0v&index=27
*/


