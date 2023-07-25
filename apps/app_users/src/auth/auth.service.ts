import {
  Injectable,
  NotFoundException,
  NotImplementedException,
  UnauthorizedException,
} from '@nestjs/common';
import { CredentialsAuthDto } from './dto/credentials-auth.dto';
import { TokenAuthDto } from './dto/token-auth.dto';
import { UsersService } from '../users/users.service';
import { PasswordService } from '../services/password.service';
import { JwtService } from '@nestjs/jwt';
import { QueryFailedError } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly passwordService: PasswordService,
    private readonly jwtService: JwtService,
  ) {}

  async loginCredentials({ username, password }: CredentialsAuthDto) {
    try {
      const user = await this.usersService.findOneByUsername(username);
      console.log('wat?');

      const matchPassword: boolean = this.passwordService.decode(
        password,
        user.password,
      );
      if (!matchPassword) {
        throw new UnauthorizedException('Authentication failed.');
      }

      const payload = {
        id: user.id,
        username,
      };

      return { token: await this.jwtService.signAsync(payload) };
    } catch (error) {
      console.log(error);

      // if (error instanceof NotFoundException) {
      //   throw new UnauthorizedException('Authentication failed.');
      // }
    }
  }

  async loginToken(tokenAuthDto: TokenAuthDto) {
    throw new NotImplementedException();
  }
}
