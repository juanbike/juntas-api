import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /*1- Tranformacion de data en DTO ver en (8:25)
  https://www.youtube.com/watch?v=QUWilnAp45M&list=PLzHaXzj_WAym4WR3gBYuy1iew5T3NgL0v&index=33&t=336s
  */

  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    /*
    2- Evitando data maliciosa
    https://www.youtube.com/watch?v=MU_8n_9JZdU&list=PLzHaXzj_WAym4WR3gBYuy1iew5T3NgL0v&index=32
    */
   whitelist: true,
   forbidNonWhitelisted: true
  }))
  await app.listen(3000);
}
bootstrap();
