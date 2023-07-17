import { HttpException } from '@nestjs/common';
import { ClientNats, RpcException } from '@nestjs/microservices';

export class CustomClientNatsProxy extends ClientNats {
  serializeError(err: Error | any) {
    if (err.status === 'HTTP EXCEPTION') {
      return new HttpException(err.message.message, +err.message.status);
    } else if (err.status === 'RPC EXCEPTION') {
      return new RpcException(err.message);
    } else {
      return new Error(err);
    }
  }
}
