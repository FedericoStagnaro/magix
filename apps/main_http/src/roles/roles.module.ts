import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { ClientsModule } from '@nestjs/microservices';
import { CustomClientNatsProxy } from '../clientProxy/custom.client.nats.proxy';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USERS_SERVICE',
        customClass: CustomClientNatsProxy,
        // options: ['nats://localhost:4222'], // TODO: Llevar configuracion a la customizacion del clienteProxy
      },
    ]),
  ],
  controllers: [RolesController],
  providers: [RolesService],
})
export class RolesModule {}
