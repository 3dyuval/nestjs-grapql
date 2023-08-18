import { AuthService } from './auth.service'
import { Args, Resolver } from '@nestjs/graphql'
import { LoginUserInput } from './dto/login-user.input'
import { LoginUserResponse } from './dto/login-user.response'
import { Mutation } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import { GQLAuthGuard } from './guards/Gql-auth.guard'

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => LoginUserResponse)
  @UseGuards(GQLAuthGuard)
  login(@Args('loginUserInput') loginUserInput: LoginUserInput) {
    return this.authService.login(loginUserInput)
  }
}
