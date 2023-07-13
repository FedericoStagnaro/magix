import { Test, TestingModule } from '@nestjs/testing';
import { AppUsersController } from './app_users.controller';
import { AppUsersService } from './app_users.service';

describe('AppUsersController', () => {
  let appUsersController: AppUsersController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppUsersController],
      providers: [AppUsersService],
    }).compile();

    appUsersController = app.get<AppUsersController>(AppUsersController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appUsersController.getHello()).toBe('Hello World!');
    });
  });
});
