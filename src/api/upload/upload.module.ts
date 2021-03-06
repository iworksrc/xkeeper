import { HttpModule, Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { MulterModule } from '@nestjs/platform-express';
import { UploadService } from './upload.service';
import { ConfigModule } from '@nestjs/config';
import { SharedModule } from '../../shared/shared.module';

@Module({
  imports: [
    SharedModule,
    MulterModule.register({ dest: './files'}),
    HttpModule,
    ConfigModule
  ],
  controllers: [
    UploadController
  ],
  providers: [UploadService],
})
export class UploadModule {}
