import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { CustomClientNatsProxy } from 'apps/main_http/src/common/proxy/custom.client.nats.proxy';
import { UserAppClient } from './user.app.client.service';

/**
 * Se Define la conexion a distintos microservicios
 * y se confifura el cliente de ser necesario
 */
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USERS_SERVICE',
        customClass: CustomClientNatsProxy,
      },
    ]),
  ],
  providers: [UserAppClient],
  exports: [UserAppClient],
})
export class ClientModule {}
