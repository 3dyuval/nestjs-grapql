import { AuthService } from './auth.service';
import { Args, Resolver } from '@nestjs/graphql';
import { LoginUserInput } from './dto/login-user.input';
import { LoginUserResponse } from './dto/login-user.response';
import { Mutation } from '@nestjs/graphql';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => LoginUserResponse)
  login(@Args('loginUserInput') loginUserInput: LoginUserInput) {
    return this.authService.login(loginUserInput);
  }
}
