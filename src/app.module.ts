import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthModule } from './infrastructure/health/health.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), HealthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
