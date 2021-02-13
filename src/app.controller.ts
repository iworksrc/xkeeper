import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  @Render('index')
  getHello(): any {
    return  { message: 'Hell world'}; // this.appService.getHello(); // ResponseBuilder(null, null, null);
  }
}
