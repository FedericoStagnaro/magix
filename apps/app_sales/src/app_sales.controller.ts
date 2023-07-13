import { Controller, Get } from '@nestjs/common';
import { AppSalesService } from './app_sales.service';

@Controller()
export class AppSalesController {
  constructor(private readonly appSalesService: AppSalesService) {}

  @Get()
  getHello(): string {
    return this.appSalesService.getHello();
  }
}
