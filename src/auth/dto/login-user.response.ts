import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class LoginUserResponse {
  @Field()
  username: string;
}
