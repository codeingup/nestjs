import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Post()
  register(@Body() Body) {}

  @Get()
  getUserList(@Param() Params) {}
}
