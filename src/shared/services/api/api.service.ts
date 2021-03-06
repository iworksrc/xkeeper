import { HttpService, Injectable, UseInterceptors } from '@nestjs/common';
import { Observable } from 'rxjs';
import { OverflowInterceptor } from '../../http-interceptors/overflow.interceptor';

@Injectable()
export class ApiService {

  constructor(
    // private readonly httpService: HttpService
    private readonly httpService: HttpService
  ) {}

  @UseInterceptors(new OverflowInterceptor())
  get(url, options = {}): Observable<any> {
    return this.httpService.get(url, options); //   new Promise<any>(() => {});
  }
}
