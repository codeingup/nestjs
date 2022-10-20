import { Body, Controller, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Post()
  register(@Body() Body) {}
}
