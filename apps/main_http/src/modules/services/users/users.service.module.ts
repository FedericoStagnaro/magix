import { Module } from '@nestjs/common';
import { ClientModule } from '../client/client.module';
import { UsersService } from './users.service';

@Module({
  imports: [ClientModule],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersServiceModule {}
