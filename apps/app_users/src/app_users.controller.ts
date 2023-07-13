import { Controller, Get } from '@nestjs/common';
import { AppUsersService } from './app_users.service';

@Controller()
export class AppUsersController {
  constructor(private readonly appUsersService: AppUsersService) {}

  @Get()
  getHello(): string {
    return this.appUsersService.getHello();
  }
}
