import { Injectable } from '@nestjs/common';

@Injectable()
export class AppSalesService {
  getHello(): string {
    return 'Hello World!';
  }
}
