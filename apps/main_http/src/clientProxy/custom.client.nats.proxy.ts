import { HttpException } from '@nestjs/common';
import { ClientNats, RpcException } from '@nestjs/microservices';

export class CustomClientNatsProxy extends ClientNats {
  constructor(options) {
    super(['nats://localhost:4222', options]);
  }

  serializeError(err: Error | any) {
    if (err.status === 'HTTP EXCEPTION') {
      return new HttpException(
        err.message.response,
        err.message.response.statusCode,
      );
    } else if (err.status === 'RPC EXCEPTION') {
      return new RpcException(err.message);
    } else {
      return new Error(err);
    }
  }
}
