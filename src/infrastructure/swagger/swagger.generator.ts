import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { tags } from './swagger.tags';
import { INestApplication } from '@nestjs/common';

const document = new DocumentBuilder()
  .setTitle('league of legend Pro Match Statics')
  .setDescription('리그 오브 레전드 프로 경기의 결과를 확인해주는 API입니다.')
  .setVersion('0.1')
  .addTag('LOL');

tags.forEach((tag) => document.addTag(tag.name, tag.description));

export default function generateSwaggerDocument(
  app: INestApplication | NestExpressApplication,
) {
  return SwaggerModule.createDocument(app, document.build());
}
