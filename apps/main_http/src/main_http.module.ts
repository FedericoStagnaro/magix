import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './filters/http.exception.filter';

@Module({
  imports: [UsersModule, RolesModule],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class MainHttpModule {}
