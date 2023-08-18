import { Field, InputType, ObjectType } from '@nestjs/graphql'

@InputType()
@ObjectType()
export class LoginUserInput {
  @Field()
  username: string

  @Field()
  password: string
}
