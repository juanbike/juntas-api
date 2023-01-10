import { Module } from '@nestjs/common';
import { SoldadoresController } from './soldadores.controller';
import { SoldadoresService } from './soldadores.service';

@Module({
  controllers: [SoldadoresController],
  providers: [SoldadoresService]
})
export class SoldadoresModule {}
