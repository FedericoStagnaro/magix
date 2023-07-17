import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role) private readonly roleRepository: Repository<Role>,
  ) {}

  async create(createRoleDto: CreateRoleDto) {
    try {
      const newRole: Role = this.roleRepository.create(createRoleDto);
      return await this.roleRepository.save(newRole);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findAll() {
    try {
      return await this.roleRepository.find({
        select: { description: true, id: true },
      });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findOne(id: number) {
    let res: Role;
    try {
      res = await this.roleRepository.findOne({ where: { id } });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
    if (!res) throw new NotFoundException();
    return res;
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    let res: UpdateResult;
    try {
      res = await this.roleRepository.update(id, updateRoleDto);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
    if (res.affected !== 1) throw new NotFoundException();
    return await this.roleRepository.findOne({ where: { id } });
  }

  async remove(id: number) {
    let res: DeleteResult;
    try {
      res = await this.roleRepository.delete(id);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
    if (res.affected !== 1) throw new NotFoundException();
    return true;
  }
}
