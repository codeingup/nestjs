import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import {
  CreateCoffeeDto,
  DeleteCoffeeDto,
  UpdateCoffeeDto,
} from './dto/coffee.dto';
import { ExampleService } from './example.service';

@Controller('example')
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}
  @Get()
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return this.exampleService.findAll();
  }

  @Post('/create')
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.exampleService.create(createCoffeeDto);
  }

  @Post('/update')
  update(@Body() createCoffeeDto: UpdateCoffeeDto) {
    return this.exampleService.update(createCoffeeDto);
  }
  @Post('/delete')
  remove(@Body() detele: DeleteCoffeeDto) {
    return this.exampleService.remove(detele.id);
  }
}
