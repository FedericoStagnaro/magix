import { Module } from '@nestjs/common';
import { MainHttpController } from './main_http.controller';
import { MainHttpService } from './main_http.service';

@Module({
  imports: [],
  controllers: [MainHttpController],
  providers: [MainHttpService],
})
export class MainHttpModule {}
