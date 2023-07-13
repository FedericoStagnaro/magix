import { NestFactory } from '@nestjs/core';
import { AppProductsModule } from './app_products.module';

async function bootstrap() {
  const app = await NestFactory.create(AppProductsModule);
  await app.listen(3000);
}
bootstrap();
