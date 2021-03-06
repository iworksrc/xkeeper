import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFilename, textFileFilter } from './utils';
import { ResponseBuilder } from '../../shared/utils/response-builder';
import { UploadService } from './upload.service';


@Controller('api')
export class UploadController {

  constructor(private readonly uploadService: UploadService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', {
    dest: './files/',
    fileFilter: textFileFilter,
    storage: diskStorage({destination: './files', filename: editFilename})})
  )
  async uploadFile(@UploadedFile('file') file): Promise<any> {
    console.log('this =>');
    const download_link = this.uploadService.doAllWork(file);

    return ResponseBuilder(download_link, 'OK', null);
  }
}
