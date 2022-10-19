import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import generateSwaggerDocument from './infrastructure/swagger/swagger.generator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  SwaggerModule.setup('docs', app, generateSwaggerDocument(app));

  await app.listen(3000);
}
bootstrap();
