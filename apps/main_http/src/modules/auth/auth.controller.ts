import {
  Controller,
  Post,
  Body,
  HttpCode,
  Get,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from '../services/auth/auth.service';
import { UsersService } from '../services/users/users.service';
import { Roles } from '../services/roles/decorators/role.decorator';
import { RolesGuard } from '../services/roles/guards/role.guard';
import { AuthGuard } from '../services/auth/guards/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
  ) {}

  @Post()
  @HttpCode(200)
  loginCredentials(@Body() credentials: any) {
    return this.authService.loginCredentials(credentials);
  }

  @Get('profile')
  @HttpCode(200) // mamushka jajaja
  @UseGuards(RolesGuard) // tercero
  @UseGuards(AuthGuard) // segundo
  @Roles('GOD', 'USER') // primero
  getProfile(@Request() req) {
    return this.userService.findOne(req.user.id);
  }
}
