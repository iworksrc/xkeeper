import { HttpModule, Module } from '@nestjs/common';
import { ApiService } from './services/api/api.service';

@Module({
  imports: [HttpModule],
  providers: [ApiService],
  exports: [ApiService]
})
export class SharedModule {}
