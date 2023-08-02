import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  create(createCategory: CreateCategoryDto) {
    throw new Error('Method not implemented.');
  }

  findAll() {
    throw new Error('Method not implemented.');
  }

  findOne(id: number) {
    throw new Error('Method not implemented.');
  }

  update(id: number, updateCategory: UpdateCategoryDto) {
    throw new Error('Method not implemented.');
  }

  remove(id: number) {
    throw new Error('Method not implemented.');
  }
}
