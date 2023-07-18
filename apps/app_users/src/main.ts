import { NestFactory } from '@nestjs/core';
import { AppUsersModule } from './app_users.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ValidationPipe } from '@nestjs/common';
import { CatchAllExceptionFilter } from './filters/catch.all.exception.filter';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppUsersModule,
    {
      transport: Transport.NATS,
      options: {
        servers: 'nats://localhost:4222',
      },
    },
  );
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new CatchAllExceptionFilter());
  await app.listen();
}
bootstrap();
