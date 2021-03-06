import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UploadModule } from './api/upload/upload.module';
import { SharedModule } from './shared/shared.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { OverflowInterceptor } from './shared/http-interceptors/overflow.interceptor';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env'],
    }),
    UploadModule,
    SharedModule]
  ,
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: OverflowInterceptor
    }
  ],
})
export class AppModule {}
