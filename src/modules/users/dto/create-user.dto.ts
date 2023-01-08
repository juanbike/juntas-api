import { IsString } from "class-validator";

export class CreateUserDto{
    @IsString()
    readonly message:string;
}

/*
Transformacion de data en DTO, ver en minuto (06:35)
https://www.youtube.com/watch?v=QUWilnAp45M&list=PLzHaXzj_WAym4WR3gBYuy1iew5T3NgL0v&index=33&t=336s
*/