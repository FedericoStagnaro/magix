import {
  Catch,
  ArgumentsHost,
  ExceptionFilter,
  BadRequestException,
  InternalServerErrorException,
  HttpException,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { QueryFailedError } from 'typeorm';

@Catch(QueryFailedError) // se puede ir agregando a medida que surja la necesidad
export class CatchQueryException implements ExceptionFilter {
  catch(exception: QueryFailedError, host: ArgumentsHost): Observable<any> {
    console.log('GO QUERY');
    let returnedError: HttpException;
    const error = exception as any;
    const code = error.code;

    switch (code) {
      case 'ER_NO_REFERENCED_ROW_2':
        returnedError = new BadRequestException(
          'Error en los valores de referencia',
        );
        break;
      case 'ER_DUP_ENTRY':
        returnedError = new BadRequestException(error.sqlMessage);
        break;

      default:
        console.log('DEFAULT: Nuevo Error', exception.driverError);

        returnedError = new InternalServerErrorException('Database error');
        break;
    }

    return throwError(() => {
      return { status: 'HTTP EXCEPTION', message: returnedError.getResponse() };
    });
  }
}
