import {
  Catch,
  ArgumentsHost,
  HttpException,
  BadRequestException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ExceptionFilter } from 'apps/app_users/src/filters/catch.all.exception.filter';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    const responseError = exception.getResponse() as any;
    const name = responseError.error || exception.message;
    const message = responseError.message || exception.message;

    response.status(status).json({
      statusCode: status,
      name: name,
      message: message,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
