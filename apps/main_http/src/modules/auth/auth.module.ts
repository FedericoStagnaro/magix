import { Module } from '@nestjs/common';
import { AuthServiceModule } from '../services/auth/auth.service.module';
import { AuthController } from './auth.controller';
import { RoleServiceModule } from '../services/roles/role.service.module';
import { UsersServiceModule } from '../services/users/users.service.module';

@Module({
  imports: [AuthServiceModule, RoleServiceModule, UsersServiceModule],
  controllers: [AuthController],
})
export class AuthModule {}
