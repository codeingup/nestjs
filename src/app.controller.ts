import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Param() params): string {
    return this.appService.getHello(params);
  }
  @Post()
  finall(@Body() Body) {
    return `${Body}`;
  }
}
