import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { configurerApp } from './configurer-app.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  configurerApp(app);
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
