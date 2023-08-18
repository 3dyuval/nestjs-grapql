import { LoginUserInput } from './dto/login-user.input'
import { UsersService } from './../users/users.service'
import { Injectable } from '@nestjs/common'
import { User } from 'src/users/entities/user.entity'
import { LoginUserResponse } from './dto/login-user.response'

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async validateUser(username: string, password: string) {
    const user = await this.userService.findOne(username).catch(console.warn)

    if (user && user.password === password) {
      const { password, ...result } = user
      return result
    }
    return null
  }

  async login(userLoginInput: LoginUserInput): Promise<LoginUserResponse> {
    const { password, ...result } = await this.userService.findOne(
      userLoginInput.username
    )

    return {
      access_token: 'jwt',
      ...result,
    }
  }
}
