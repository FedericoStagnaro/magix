import { HttpException, Inject, Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class RolesService {
  constructor(@Inject('USERS_SERVICE') private roleClient: ClientProxy) {}

  async create(createRoleDto: CreateRoleDto) {
    try {
      return await lastValueFrom(
        this.roleClient.send('createRole', createRoleDto),
      );
    } catch (error) {
      throw Error(error.message);
    }
  }

  async findAll() {
    try {
      return await lastValueFrom(this.roleClient.send('findAllRoles', {}));
    } catch (error) {
      throw Error(error.message);
    }
  }

  async findOne(id: number) {
    try {
      return await lastValueFrom(this.roleClient.send('findOneRole', id));
    } catch (error) {
      throw Error(error.message);
    }
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    try {
      return await lastValueFrom(
        this.roleClient.send('updateRole', {
          ...updateRoleDto,
          id,
        }),
      );
    } catch (error) {
      throw Error(error.message);
    }
  }

  async remove(id: number) {
    return await lastValueFrom(this.roleClient.send('removeRole', id));
  }
}
