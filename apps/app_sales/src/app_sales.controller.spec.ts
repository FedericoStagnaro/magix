import { Test, TestingModule } from '@nestjs/testing';
import { AppSalesController } from './app_sales.controller';
import { AppSalesService } from './app_sales.service';

describe('AppSalesController', () => {
  let appSalesController: AppSalesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppSalesController],
      providers: [AppSalesService],
    }).compile();

    appSalesController = app.get<AppSalesController>(AppSalesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appSalesController.getHello()).toBe('Hello World!');
    });
  });
});
