import {
  Controller,
  Post,
  Body,
  HttpCode,
  Request,
  Get,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CredentialsAuthDto } from './dto/credentials-auth.dto';
import { AuthGuard } from './guards/auth.guard';
import { UsersService } from '../users/users.service';
import { RolesGuard } from './guards/role.guard';
import { Roles } from './decorators/role.decorator';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
  ) {}

  @Post()
  @HttpCode(200)
  loginCredentials(@Body() credentials: CredentialsAuthDto) {
    return this.authService.loginCredentials(credentials);
  }

  @Get('profile')
  @HttpCode(200)
  @Roles('GOD', 'USER')
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
  getProfile(@Request() req) {
    return this.userService.findOne(req.user.id);
  }
}
