import { Controller } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller()
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @MessagePattern('createCategory')
  createCategory() {
    console.log();
  }

  @MessagePattern('createCategory')
  async create(@Payload() createCategory: CreateCategoryDto) {
    return await this.categoriesService.create(createCategory);
  }

  @MessagePattern('findAllCategory')
  async findAll() {
    return await this.categoriesService.findAll();
  }

  @MessagePattern('findOneCategory')
  async findOne(@Payload() id: number) {
    return await this.categoriesService.findOne(id);
  }

  @MessagePattern('updateCategory')
  async update(@Payload() updateCategory: UpdateCategoryDto) {
    return await this.categoriesService.update(
      updateCategory.id,
      updateCategory,
    );
  }

  @MessagePattern('removeCategory')
  async remove(@Payload() id: number) {
    return await this.categoriesService.remove(id);
  }
}
