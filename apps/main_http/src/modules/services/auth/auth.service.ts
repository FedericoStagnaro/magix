import { Injectable } from '@nestjs/common';
import { UserAppClient } from '../client/user.app.client.service';

@Injectable()
export class AuthService {
  constructor(private authClient: UserAppClient) {}

  async loginCredentials(createAuthDto: any) {
    return await this.authClient.send('loginCredentials', createAuthDto);
  }

  async loginToken(token: any) {
    return await this.authClient.send('loginToken', token);
  }
}
