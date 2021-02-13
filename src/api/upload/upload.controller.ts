import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFilename, textFileFilter } from './utils';
import { ResponseBuilder } from '../../shared/response-builder';


@Controller('api')
export class UploadController {
  @Post('upload')
  @UseInterceptors(FileInterceptor('file', {
    dest: './files/',
    fileFilter: textFileFilter,
    storage: diskStorage({destination: './files', filename: editFilename})})
  )
  async uploadFile(@UploadedFile('file') file): Promise<any> {
    // console.log(file);
    return ResponseBuilder(file, 'OK', null);
  }
}
