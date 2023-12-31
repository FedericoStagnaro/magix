import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { PasswordService } from '../services/password.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstant } from './constant';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstant.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
  providers: [PasswordService],
})
export class AuthModule {}
