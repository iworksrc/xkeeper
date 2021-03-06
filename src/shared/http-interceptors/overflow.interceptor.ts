import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class OverflowInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.group('OverflowInterceptor');
    console.log('Before...', context);

    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap(() => {
          console.log(`After... ${Date.now() - now}ms`);
          console.groupEnd();
        })
      );
  }
}
