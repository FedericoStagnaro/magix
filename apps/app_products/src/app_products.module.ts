import { Module } from '@nestjs/common';
import { ProductsModule } from './modules/products/products.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './modules/categories/entity/category.entity';

@Module({
  imports: [
    ProductsModule,
    CategoriesModule,
    TypeOrmModule.forRoot({
      database: 'app_products',
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      port: 3306,
      entities: [Category],
      synchronize: true,
    }),
  ],
})
export class AppProductsModule {}
