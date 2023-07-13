import { Controller, Get } from '@nestjs/common';
import { MainHttpService } from './main_http.service';

@Controller()
export class MainHttpController {
  constructor(private readonly mainHttpService: MainHttpService) {}

  @Get()
  getHello(): string {
    return this.mainHttpService.getHello();
  }
}
