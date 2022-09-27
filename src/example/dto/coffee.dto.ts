import { IsNumber, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
export class CreateCoffeeDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly type: string;
  // @IsString({ each: true })
  // readonly list: string[];
}
export class DeleteCoffeeDto {
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
