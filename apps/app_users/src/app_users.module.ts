import { Module } from '@nestjs/common';
import { AppUsersController } from './app_users.controller';
import { AppUsersService } from './app_users.service';

@Module({
  imports: [],
  controllers: [AppUsersController],
  providers: [AppUsersService],
})
export class AppUsersModule {}
