import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UsersService {
  constructor(@Inject('USERS_SERVICE') private clientUsers: ClientProxy) {}

  async create(createUserDto: CreateUserDto) {
    return await this.clientUsers.send('createUser', createUserDto);
  }

  async findAll() {
    return await this.clientUsers.send('findAllUsers', {});
  }

  async findOne(id: number) {
    return await this.clientUsers.send('findOneUser', id);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.clientUsers.send('updateUser', updateUserDto);
  }

  async remove(id: number) {
    return await this.clientUsers.send('removeUser', id);
  }
}
