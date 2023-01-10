import { Test, TestingModule } from '@nestjs/testing';
import { SoldadoresController } from './soldadores.controller';

describe('SoldadoresController', () => {
  let controller: SoldadoresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SoldadoresController],
    }).compile();

    controller = module.get<SoldadoresController>(SoldadoresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
