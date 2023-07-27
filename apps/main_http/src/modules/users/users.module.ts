import { Module } from '@nestjs/common';
import { UsersServiceModule } from '../services/users/users.service.module';
import { UsersController } from './users.controller';
import { AuthServiceModule } from '../services/auth/auth.service.module';

@Module({
  imports: [UsersServiceModule, AuthServiceModule],
  controllers: [UsersController],
})
export class UsersModule {}
