import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @CreateDateColumn()
  createTime:string


  @UpdateDateColumn()
  updateTime:string
  // @Column('json', { nullable: true })
  // list: string[];
}
