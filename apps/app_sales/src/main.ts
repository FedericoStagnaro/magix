import { NestFactory } from '@nestjs/core';
import { AppSalesModule } from './app_sales.module';

async function bootstrap() {
  const app = await NestFactory.create(AppSalesModule);
  await app.listen(3000);
}
bootstrap();
