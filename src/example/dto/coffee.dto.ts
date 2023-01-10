import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';
export class CreateCoffeeDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly type: string;
}
export class DeleteCoffeeDto {
  /** 唯一id */
  @IsNumber()
  readonly id: number;
}

/**
 * 继承并设置所有属性都是可选的
 */
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {
  @IsNumber()
  readonly id: number;
}
