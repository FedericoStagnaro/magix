import {
  Catch,
  ArgumentsHost,
  HttpException,
  ExceptionFilter,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';

@Catch(HttpException)
export class CatchHttpException implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost): Observable<any> {
    console.log('GO HTTP');
    return throwError(() => {
      return { status: 'HTTP EXCEPTION', message: exception.getResponse() };
    });
  }
}
