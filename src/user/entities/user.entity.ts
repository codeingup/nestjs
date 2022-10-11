import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User{
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column({comment:"昵称"})
    nickName:string

    @Column({comment:"性别 0:女  1:男 2:未知"})
    sex:number

    @Column({comment:'手机号码'})
    phone:number

    @Column({comment:"密码"})
    password:string
}