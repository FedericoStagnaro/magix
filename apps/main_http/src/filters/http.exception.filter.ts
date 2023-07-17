import { Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { Request, Response } from 'express';
import { ExceptionFilter } from 'apps/app_users/src/filters/catch.all.exception.filter';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost): Observable<any> {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    response.status(status).json({
      statusCode: status,
      name: exception.name,
      message: exception.message,
      timestamp: new Date().toISOString(),
      path: request.url,
    });

    return throwError(() => exception);
  }
}
