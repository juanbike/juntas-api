import { Module } from '@nestjs/common';


import { UsersModule } from './modules/users/users.module';
import { SoldadoresModule } from './modules/soldadores/soldadores.module';

@Module({
  imports: [UsersModule, SoldadoresModule],
  
})
export class AppModule {}


/*
Implementacion de modulos
https://www.youtube.com/watch?v=FPiEDkTwa9k&list=PLzHaXzj_WAym4WR3gBYuy1iew5T3NgL0v&index=30&t=6s
*/