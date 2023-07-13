import { NestFactory } from '@nestjs/core';
import { AppUsersModule } from './app_users.module';

async function bootstrap() {
  const app = await NestFactory.create(AppUsersModule);
  await app.listen(3000);
}
bootstrap();
