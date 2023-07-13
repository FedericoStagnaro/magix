import { Module } from '@nestjs/common';
import { AppUsersController } from './app_users.controller';
import { AppUsersService } from './app_users.service';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';

@Module({
  imports: [RolesModule, UsersModule],
  controllers: [AppUsersController],
  providers: [AppUsersService],
})
export class AppUsersModule {}
