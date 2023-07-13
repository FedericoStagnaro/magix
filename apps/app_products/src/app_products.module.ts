import { Module } from '@nestjs/common';
import { AppProductsController } from './app_products.controller';
import { AppProductsService } from './app_products.service';

@Module({
  imports: [],
  controllers: [AppProductsController],
  providers: [AppProductsService],
})
export class AppProductsModule {}
