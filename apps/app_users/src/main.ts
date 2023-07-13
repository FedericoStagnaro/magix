import { NestFactory } from '@nestjs/core';
import { AppUsersModule } from './app_users.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

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
  await app.listen();
}
bootstrap();
