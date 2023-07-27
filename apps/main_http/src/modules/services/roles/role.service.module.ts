import { Module } from '@nestjs/common';
import { ClientModule } from '../client/client.module';
import { RoleService } from './role.service';
import { RolesGuard } from './guards/role.guard';

@Module({
  imports: [ClientModule],
  providers: [RoleService, RolesGuard],
  exports: [RoleService, RolesGuard],
})
export class RoleServiceModule {}
