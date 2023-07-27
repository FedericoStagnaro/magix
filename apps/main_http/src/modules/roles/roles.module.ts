import { Module } from '@nestjs/common';
import { RoleServiceModule } from '../services/roles/role.service.module';
import { RolesController } from './roles.controller';

@Module({
  imports: [RoleServiceModule],
  controllers: [RolesController],
})
export class RolesModule {}
