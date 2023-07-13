import { NestFactory } from '@nestjs/core';
import { MainHttpModule } from './main_http.module';

async function bootstrap() {
  const app = await NestFactory.create(MainHttpModule);
  await app.listen(3000);
}
bootstrap();
