import {
  Catch,
  ArgumentsHost,
  HttpException,
  ExceptionFilter,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { RpcException } from '@nestjs/microservices';

@Catch()
export class CatchAllExceptionFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost): Observable<any> {
    if (exception instanceof HttpException) {
      console.log('GO HTTP Exception');
      return throwError(() => {
        return { status: 'HTTP EXCEPTION', message: exception };
      });
    } else if (exception instanceof RpcException) {
      console.log('GO RpcException');
      return throwError(() => {
        return { status: 'RPC EXCEPTION', message: exception.getError() };
      });
    } else {
      console.log('GO Default ');
      return throwError(() => {
        return { status: 'DEFAULT EXCEPTION', message: exception.message };
      });
    }
  }
}
export { ExceptionFilter };
