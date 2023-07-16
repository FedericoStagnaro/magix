import { Controller } from '@nestjs/common';
import { MessagePattern, Payload, RpcException } from '@nestjs/microservices';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Controller()
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @MessagePattern('createRole')
  async create(@Payload() createRoleDto: CreateRoleDto) {
    try {
      return await this.rolesService.create(createRoleDto);
    } catch (error) {
      throw new RpcException(error.message);
    }
  }

  @MessagePattern('findAllRoles')
  async findAll() {
    try {
      return await this.rolesService.findAll();
    } catch (error) {
      throw new RpcException(error.message);
    }
  }

  @MessagePattern('findOneRole')
  async findOne(@Payload() id: number) {
    try {
      return await this.rolesService.findOne(id);
    } catch (error) {
      throw new RpcException(error.message);
    }
  }

  @MessagePattern('updateRole')
  async update(@Payload() updateRoleDto: UpdateRoleDto) {
    try {
      return await this.rolesService.update(updateRoleDto.id, updateRoleDto);
    } catch (error) {
      throw new RpcException(error.message);
    }
  }

  @MessagePattern('removeRole')
  async remove(@Payload() id: number) {
    try {
      return await this.rolesService.remove(id);
    } catch (error) {
      throw new RpcException(error.message);
    }
  }
}
