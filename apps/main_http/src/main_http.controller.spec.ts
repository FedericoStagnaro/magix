import { Test, TestingModule } from '@nestjs/testing';
import { MainHttpController } from './main_http.controller';
import { MainHttpService } from './main_http.service';

describe('MainHttpController', () => {
  let mainHttpController: MainHttpController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MainHttpController],
      providers: [MainHttpService],
    }).compile();

    mainHttpController = app.get<MainHttpController>(MainHttpController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(mainHttpController.getHello()).toBe('Hello World!');
    });
  });
});
