import { Test, TestingModule } from '@nestjs/testing';
import { AppProductsController } from './app_products.controller';
import { AppProductsService } from './app_products.service';

describe('AppProductsController', () => {
  let appProductsController: AppProductsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppProductsController],
      providers: [AppProductsService],
    }).compile();

    appProductsController = app.get<AppProductsController>(AppProductsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appProductsController.getHello()).toBe('Hello World!');
    });
  });
});
