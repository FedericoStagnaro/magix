import { HttpException } from '@nestjs/common';
import { ClientNats, RpcException } from '@nestjs/microservices';

export class CustomClientNatsProxy extends ClientNats {
  constructor(options) {
    super(['nats://localhost:4222', options]);
    // this.options.servers = ['nats://localhost:4222'];
  }

  serializeError(err: Error | any) {
    console.log('CLIENTE');
    console.log(err);

    if (err.status === 'HTTP EXCEPTION') {
      return new HttpException(err.message.message, +err.message.status);
    } else if (err.status === 'RPC EXCEPTION') {
      return new RpcException(err.message);
    } else {
      return new Error(err);
    }
  }
}
