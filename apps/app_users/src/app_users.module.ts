import { Module } from '@nestjs/common';
import { AppUsersController } from './app_users.controller';
import { AppUsersService } from './app_users.service';
import { RolesModule } from './roles/roles.module';

@Module({
  imports: [RolesModule],
  controllers: [AppUsersController],
  providers: [AppUsersService],
})
export class AppUsersModule {}
