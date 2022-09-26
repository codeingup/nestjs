import { Injectable } from '@nestjs/common';

@Injectable()
export class ExampleService {
  private listData = [];

  findAll() {
    return this.listData;
  }
}
