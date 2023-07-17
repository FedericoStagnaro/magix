import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Controller()
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @MessagePattern('createRole')
  async create(@Payload() createRoleDto: CreateRoleDto) {
    return await this.rolesService.create(createRoleDto);
  }

  @MessagePattern('findAllRoles')
  async findAll() {
    return await this.rolesService.findAll();
  }

  @MessagePattern('findOneRole')
  async findOne(@Payload() id: number) {
    return await this.rolesService.findOne(id);
  }

  @MessagePattern('updateRole')
  async update(@Payload() updateRoleDto: UpdateRoleDto) {
    return await this.rolesService.update(updateRoleDto.id, updateRoleDto);
  }

  @MessagePattern('removeRole')
  async remove(@Payload() id: number) {
    return await this.rolesService.remove(id);
  }
}
