import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthModule } from './infrastructure/health/health.module';
import { ConfigModule } from '@nestjs/config';
import { dataSourceConfig } from './data-source';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    ConfigModule.forRoot(),
    HealthModule,
    TypeOrmModule.forRoot(dataSourceConfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
