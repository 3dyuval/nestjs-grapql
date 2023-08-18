import { ObjectType, Field } from '@nestjs/graphql'

@ObjectType()
export class LoginUserResponse {
  @Field()
  username: string

  @Field()
  access_token: string
}
