import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { ExampleService } from './example.service';

@Controller('example')
export class ExampleController {
  //   @Get()
  //   //   findall(@Param('id') id: string, @Res() response)
  //   findall(@Param('id') id: string) {
  //     return `This get id is ${id}`;

  //     // response.status(200).send('This a example');
  //   }
  constructor(private readonly exampleService: ExampleService) {}
  @Get()
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;

    return this.exampleService.findAll();
  }

  @Post()
  //   @HttpCode(HttpStatus.GONE)
  create(@Body() CreateCoffeeDto: CreateCoffeeDto) {
    return CreateCoffeeDto;
  }
}
