import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { Role } from './roles/entities/role.entity';

@Module({
  imports: [
    RolesModule,
    UsersModule,
    TypeOrmModule.forRoot({
      database: 'app_users',
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      entities: [User, Role],
      synchronize: true,
      logging: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppUsersModule {}
