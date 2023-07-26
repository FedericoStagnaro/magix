import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { CustomClientNatsProxy } from '../common/proxy/custom.client.nats.proxy';
import { ClientsModule } from '@nestjs/microservices';
import { UsersService } from '../users/users.service';
import { RolesService } from '../roles/roles.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USERS_SERVICE',
        customClass: CustomClientNatsProxy,
      },
    ]),
  ],
  controllers: [AuthController],
  providers: [AuthService, UsersService, RolesService],
})
export class AuthModule {}
