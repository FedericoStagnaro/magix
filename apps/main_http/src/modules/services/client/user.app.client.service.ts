import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class UserAppClient {
  constructor(@Inject('USERS_SERVICE') private clientUsers: ClientProxy) {}

  async send(message: string, data: any): Promise<any> {
    return await lastValueFrom(this.clientUsers.send(message, data));
  }
}
