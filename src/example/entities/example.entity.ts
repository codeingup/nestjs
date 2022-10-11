import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Coffee {
  @PrimaryGeneratedColumn({
    comment:"主键，唯一标识"
  })
  id: number;

  @Column({
    comment:'名称'
  })
  name: string;

  @Column({
    comment:"类型"
  })
  type: string;

  @CreateDateColumn({
    comment:"创建时间"
  })
  createTime:string

  @UpdateDateColumn({
    comment:"更新时间"
  })
  updateTime:string
  // @Column('json', { nullable: true })
  // list: string[];
}
