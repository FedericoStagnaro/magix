import { Module } from '@nestjs/common';
import { AppSalesController } from './app_sales.controller';
import { AppSalesService } from './app_sales.service';

@Module({
  imports: [],
  controllers: [AppSalesController],
  providers: [AppSalesService],
})
export class AppSalesModule {}
