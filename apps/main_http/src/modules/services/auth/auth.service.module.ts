import { Module } from '@nestjs/common';
import { UsersServiceModule } from '../users/users.service.module';
import { RoleServiceModule } from '../roles/role.service.module';
import { AuthService } from './auth.service';
import { ClientModule } from '../client/client.module';
import { AuthGuard } from './guards/auth.guard';

@Module({
  imports: [UsersServiceModule, RoleServiceModule, ClientModule],
  providers: [AuthService, AuthGuard, AuthGuard],
  exports: [AuthService, AuthGuard],
})
export class AuthServiceModule {}
