import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import {
  DeleteResult,
  QueryFailedError,
  Repository,
  UpdateResult,
} from 'typeorm';
import { Category } from './entity/category.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async create(createCategory: CreateCategoryDto) {
    try {
      const newCategory = this.categoryRepository.create(createCategory);
      return await this.categoryRepository.save(newCategory);
    } catch (error) {
      if (error instanceof QueryFailedError) {
        throw new BadRequestException(error.message);
      } else {
        throw new InternalServerErrorException(error);
      }
    }
  }

  async findAll() {
    try {
      return await this.categoryRepository.find({
        select: { description: true, id: true },
      });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findOne(id: number) {
    let res: Category;
    try {
      res = await this.categoryRepository.findOne({ where: { id } });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
    if (!res) throw new NotFoundException('Not found category');
    return res;
  }

  async update(id: number, updateCategory: UpdateCategoryDto) {
    let res: UpdateResult;
    try {
      res = await this.categoryRepository.update(id, updateCategory);
    } catch (error: Error | QueryFailedError | any) {
      if (error instanceof QueryFailedError) {
        throw new BadRequestException(error.message);
      } else {
        throw new InternalServerErrorException(error);
      }
    }
    if (res.affected !== 1) throw new NotFoundException('Not found category');
    return await this.categoryRepository.findOne({ where: { id } });
  }

  async remove(id: number) {
    let res: DeleteResult;
    try {
      res = await this.categoryRepository.delete(id);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
    if (res.affected !== 1) throw new NotFoundException('Not found category');
    return true;
  }
}
