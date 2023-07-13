import { Module } from '@nestjs/common';
import { AppUsersController } from './app_users.controller';
import { AppUsersService } from './app_users.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [AppUsersController],
  providers: [AppUsersService],
})
export class AppUsersModule {}
