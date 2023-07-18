import { Catch, ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { RpcException } from '@nestjs/microservices';

@Catch()
export class CatchAllExceptionFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost): Observable<any> {
    if (exception instanceof RpcException) {
      console.log('GO RPC');
      return throwError(() => {
        return { status: 'RPC EXCEPTION', message: exception.getError() };
      });
    } else {
      console.log('GO DEFAULT ');
      return throwError(() => {
        return { status: 'DEFAULT EXCEPTION', message: exception.message };
      });
    }
  }
}
