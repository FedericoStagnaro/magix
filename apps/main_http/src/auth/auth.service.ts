import { Inject, Injectable } from '@nestjs/common';
import { CredentialsAuthDto } from './dto/credentials-auth.dto';
import { TokenAuthDto } from './dto/token-auth.dto';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(@Inject('USERS_SERVICE') private authClient: ClientProxy) {}

  async loginCredentials(createAuthDto: CredentialsAuthDto) {
    return await lastValueFrom(
      this.authClient.send('loginCredentials', createAuthDto),
    );
  }

  async loginToken(token: TokenAuthDto) {
    return await lastValueFrom(this.authClient.send('loginToken', token));
  }
}
