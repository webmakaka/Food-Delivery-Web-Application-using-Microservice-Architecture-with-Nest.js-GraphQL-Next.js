import { NestFactory } from '@nestjs/core';
import { AppModule } from './users.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4002);
}
bootstrap();
