import { HttpService, Injectable } from '@nestjs/common';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

import {
  AxiosInterceptor,
  AxiosFulfilledInterceptor,
  AxiosRejectedInterceptor,
} from '@narando/nest-axios-interceptor';

@Injectable()
export class LoggingAxiosInterceptor extends AxiosInterceptor {
  constructor(httpService: HttpService) {
    super(httpService);
  }

  requestFulfilled(): AxiosFulfilledInterceptor<AxiosRequestConfig> {
    return (config) => {
      // log outgoing request
      // console.log(`Request =>: ${config.method} ${config.url}`);
      console.log('Request =>', config);
      return config;
    }
  }

  responseRejected(): AxiosRejectedInterceptor {
    return (err) => {
      if (this.isAxiosError(err)) {
        const { config, response } = err;

        console.log(
          `Error ${response.status} in request "${config.method} ${config.url}`
        );
      } else {
        console.error("Unexpected generic error", err);
      }

      throw err;
    };
  }

}
