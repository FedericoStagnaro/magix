import { Injectable } from '@nestjs/common';
import { UserAppClient } from '../client/user.app.client.service';

@Injectable()
export class UsersService {
  constructor(private readonly userClient: UserAppClient) {}

  async create(createUserDto) {
    return await this.userClient.send('createUser', createUserDto);
  }

  async findAll() {
    return await this.userClient.send('findAllUsers', {});
  }

  async findOne(id: number) {
    return await this.userClient.send('findOneUser', id);
  }

  async update(id: number, updateUserDto) {
    return await this.userClient.send('updateUser', updateUserDto);
  }

  async remove(id: number) {
    return await this.userClient.send('removeUser', id);
  }
}
