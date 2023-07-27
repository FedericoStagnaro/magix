import { Injectable } from '@nestjs/common';
import { UserAppClient } from '../client/user.app.client.service';

@Injectable()
export class RoleService {
  constructor(private readonly roleClient: UserAppClient) {}

  async create(createRoleDto: any) {
    return await this.roleClient.send('createRole', createRoleDto);
  }
  async findAll() {
    return await this.roleClient.send('findAllRoles', {});
  }

  async findOne(id: number) {
    return await this.roleClient.send('findOneRole', id);
  }

  async update(id: number, updateRoleDto) {
    return await this.roleClient.send('updateRole', {
      ...updateRoleDto,
      id,
    });
  }

  async remove(id: number) {
    return await this.roleClient.send('removeRole', id);
  }
}
