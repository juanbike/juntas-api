import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';

import { User } from './user.entity';

@Injectable()
export class UsersService {
    private users: User[] = [
        {
            id: '36',
            message: 'hola desde la entidad usuario'
            
        }
    ];

    getUsers():User[]{
        return this.users;
    }


    getUser(id: string):User{
        const user = this.users.find((item) => item.id === id);

        if(!user){
            throw new NotFoundException('Usuario no encontrado')
        }

        /*
        Si no existe el usuario
        https://www.youtube.com/watch?v=RlWn0hHZpzI&list=PLzHaXzj_WAym4WR3gBYuy1iew5T3NgL0v&index=28
        */
        return user
    }

    createUser(message: string){
        return this.users.push({
            id: (Math.floor(Math.random() * 2000) + 1).toString(), message
        });
    }

    updateUser(id:string, message: any){
        const user: User = this.getUser(id);
        user.message = message;
        
        return user;
    }

    removeUser(id:string){
        const index = this.users.findIndex((user) => user.id === id);
        if(index >= 0){
            this.users.splice(index,1)
        }
    }



}

/*
https://www.youtube.com/watch?v=gsEqU_OFx8Y&list=PLzHaXzj_WAym4WR3gBYuy1iew5T3NgL0v&index=27
*/
