import { HttpService, Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class UploadService {

  rowSeparator = '\n';

  constructor(
    private readonly httpService: HttpService
  ) {}

  doAllWork(file_descriptor): any {
    // console.log('fs =>', fs)
    const results = [];

    const data = fs.readFileSync(file_descriptor.path, 'utf8')

    data.split(this.rowSeparator)
      .map((city)=> {
        this.httpService.get('')
          .toPromise()
          .then((resp) => {

          })
      });

    return;
  }
}
