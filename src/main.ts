import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { urlInfo } from './util/link.info';
import { env } from './config/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await urlInfo(env.PORT)

  await app.listen(env.PORT);
}
bootstrap();
