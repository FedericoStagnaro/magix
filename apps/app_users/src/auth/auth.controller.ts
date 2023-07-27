import {
  Controller,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CredentialsAuthDto } from './dto/credentials-auth.dto';
import { TokenAuthDto } from './dto/token-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { PasswordService } from '../services/password.service';
import { UsersService } from '../users/users.service';
import { jwtConstant } from './constant';

@Controller()
export class AuthController {
  constructor(
    private readonly usersService: UsersService,
    private readonly passwordService: PasswordService,
    private readonly jwtService: JwtService,
  ) {}

  @MessagePattern('loginCredentials')
  async loginCredentials(@Payload() credentialsAuthDto: CredentialsAuthDto) {
    try {
      const user = await this.usersService.findOneByUsername(
        credentialsAuthDto.username,
      );
      const matchPassword: boolean = this.passwordService.decode(
        credentialsAuthDto.password,
        user.password,
      );
      if (!matchPassword) {
        throw new UnauthorizedException('Authentication failed.');
      }
      const payload = {
        id: user.id,
        username: credentialsAuthDto.username,
        roleId: user.roleId,
      };

      return { token: await this.jwtService.signAsync(payload) };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new UnauthorizedException('Authentication failed.'); // para no proveer informacion de los usuarios del sistema
      } else {
        throw error;
      }
    }
  }

  @MessagePattern('loginToken')
  async loginToken(@Payload() tokenAuth: TokenAuthDto) {
    try {
      const payload = await this.jwtService.verifyAsync(tokenAuth.token, {
        secret: jwtConstant.secret,
      });
      return payload;
    } catch {
      throw new UnauthorizedException();
    }
  }
}
