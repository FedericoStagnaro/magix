import { Controller, Get } from '@nestjs/common';
import { AppProductsService } from './app_products.service';

@Controller()
export class AppProductsController {
  constructor(private readonly appProductsService: AppProductsService) {}

  @Get()
  getHello(): string {
    return this.appProductsService.getHello();
  }
}
