import { IsNumber, IsString } from "class-validator"


export class CreateUserDto {
  

    @IsString()
    readonly nickName:string

    @IsNumber()
    readonly sex?:number

    @IsNumber()
    readonly phone?:number

    @IsString()
    readonly avatarUrl?:string

    @IsString()
    readonly password:string


}
