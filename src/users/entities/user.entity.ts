import { ObjectType, Field, Int } from '@nestjs/graphql'
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('user')
@ObjectType()
export class User {
  @Column()
  @Field()
  username: string

  @Column()
  @Field()
  password: string

  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number
}
