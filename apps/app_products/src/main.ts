import { NestFactory } from '@nestjs/core';
import { AppProductsModule } from './app_products.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppProductsModule,
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
