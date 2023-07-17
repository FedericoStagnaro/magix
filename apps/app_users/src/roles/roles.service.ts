import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { DeleteResult, Repository } from 'typeorm';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role) private readonly roleRepository: Repository<Role>,
  ) {}

  async create(createRoleDto: CreateRoleDto) {
    const newRole = this.roleRepository.create(createRoleDto);
    return await this.roleRepository.save(newRole);
  }

  async findAll() {
    return await this.roleRepository.find({
      select: { description: true, id: true },
    });
  }

  async findOne(id: number) {
    const result = await this.roleRepository.findOne({ where: { id } });
    if (result) {
      return result;
    } else {
      throw new Error('No se encontró el item buscado'); // TODO: Cambiar a ingles
    }
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    const res = await this.roleRepository.update(id, updateRoleDto);
    if (res.affected === 1) {
      return await this.roleRepository.findOne({ where: { id } });
    } else {
      throw new Error('No se encontró el item a actualizar'); // TODO: Cambiar a ingles
    }
  }

  async remove(id: number) {
    let res: DeleteResult;
    try {
      res = await this.roleRepository.delete(id);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
    if (res.affected !== 1) throw new NotFoundException();
    else return true;
  }
}
