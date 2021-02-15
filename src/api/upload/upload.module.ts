import { HttpModule, Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { MulterModule } from '@nestjs/platform-express';
import { UploadService } from './upload.service';

@Module({
  imports: [
    MulterModule.register({ dest: './files'}),
    HttpModule
  ],
  controllers: [
    UploadController
  ],
  providers: [UploadService],
})
export class UploadModule {}
