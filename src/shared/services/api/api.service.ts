import { HttpService, Injectable, UseInterceptors } from '@nestjs/common';
import { Observable } from 'rxjs';
import { OverflowInterceptor } from '../../http-interceptors/overflow.interceptor';
import { LoggingAxiosInterceptor } from '../../axios-interceptors/logging-axios.interceptor';
import { AxiosFulfilledInterceptor } from '@narando/nest-axios-interceptor';
import { AxiosRequestConfig } from 'axios';

@Injectable()
export class ApiService {

  constructor(
    private readonly httpService: HttpService
  ) {

    // const onFulfilled = (value: any): any => {
    //   console.log('onFulfilled =>', value);
    //   return value;
    // }
    //
    // const onRejected: (error: any) => any = (error) => {
    //   console.log('onRejected =>', error);
    //   return error;
    // }
    //
    // this.httpService.axiosRef.interceptors.request.use(onFulfilled, onRejected);
  }

  @UseInterceptors(LoggingAxiosInterceptor)
  get(url, options = {}): Observable<any> {
    return this.httpService.get(url, options); //   new Promise<any>(() => {});
  }
}
