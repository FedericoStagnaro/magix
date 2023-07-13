import { Module } from '@nestjs/common';
import { AppUsersController } from './app_users.controller';
import { AppUsersService } from './app_users.service';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    RolesModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [AppUsersController],
  providers: [AppUsersService],
})
export class AppUsersModule {}
