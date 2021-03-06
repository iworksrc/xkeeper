import { HttpModule, Module } from '@nestjs/common';
import { ApiService } from './services/api/api.service';
import { LoggingAxiosInterceptor } from './axios-interceptors/logging-axios.interceptor';

@Module({
  imports: [HttpModule],
  providers: [ApiService],
  exports: [ApiService]
})
export class SharedModule {}
