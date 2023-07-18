import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ClientsModule } from '@nestjs/microservices';
import { CustomClientNatsProxy } from '../clientProxy/custom.client.nats.proxy';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USERS_SERVICE',
        customClass: CustomClientNatsProxy,
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
