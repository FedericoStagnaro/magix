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
// import { TokenAuthDto } from './dto/token-auth.dto';
import { AuthGuard } from './auth.guard';
import { UsersService } from '../users/users.service';

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
  @UseGuards(AuthGuard)
  getProfile(@Request() req) {
    return this.userService.findOne(req.user.id);
  }
}
// @Post('token')
// @HttpCode(200)
// loginToken(@Body() token: TokenAuthDto) {
//   return this.authService.loginToken(token);
// }

// @Get()
// findAll() {
//   return this.authService.findAll();
// }

// @Get(':id')
// findOne(@Param('id') id: string) {
//   return this.authService.findOne(+id);
// }

// @Patch(':id')
// update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
//   return this.authService.update(+id, updateAuthDto);
// }

// @Delete(':id')
// remove(@Param('id') id: string) {
//   return this.authService.remove(+id);
// }
