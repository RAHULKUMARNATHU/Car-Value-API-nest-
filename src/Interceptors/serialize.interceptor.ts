import {
  UseInterceptors,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { plainToClass } from 'class-transformer';

export class SerializeInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    //  Run Something before a request handled
    // by the request handler
    console.log(' I am running before the handler ', context);
    return next.handle().pipe(
      map((data: any) => {
        //  Run Something before a response handled
        // by the response handler

        console.log('I am running before the response is sent out ', data);
      }),
    );
  }
}
