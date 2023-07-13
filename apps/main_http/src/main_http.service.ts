import { Injectable } from '@nestjs/common';

@Injectable()
export class MainHttpService {
  getHello(): string {
    return 'Hello World!';
  }
}
