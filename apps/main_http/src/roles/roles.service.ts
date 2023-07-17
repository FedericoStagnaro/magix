import { Inject, Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class RolesService {
  constructor(@Inject('USERS_SERVICE') private roleClient: ClientProxy) {}

  async create(createRoleDto: CreateRoleDto) {
    return await lastValueFrom(
      this.roleClient.send('createRole', createRoleDto),
    );
  }

  async findAll() {
    return await lastValueFrom(this.roleClient.send('findAllRoles', {}));
  }

  async findOne(id: number) {
    return await lastValueFrom(this.roleClient.send('findOneRole', id));
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    return await lastValueFrom(
      this.roleClient.send('updateRole', {
        ...updateRoleDto,
        id,
      }),
    );
  }

  async remove(id: number) {
    return await lastValueFrom(this.roleClient.send('removeRole', id));
  }
}
