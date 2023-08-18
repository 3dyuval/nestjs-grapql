import { Controller, UseGuards } from '@nestjs/common'
import { Args } from '@nestjs/graphql'
import { MessagePattern } from '@nestjs/microservices'
import { AuthGuard } from '@nestjs/passport'
import { LoginUserInput } from './dto/login-user.input'
import { AuthService } from './auth.service'
import { RestAuthGuard } from './guards/Rest-auth.guard'
@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @MessagePattern({ cmd: 'test' })
  test(body) {
    if (body === 'hello') {
      return 'world'
    }
    return 'received'
  }

  @MessagePattern({ cmd: 'login' })
  @UseGuards(RestAuthGuard)
  login(body: LoginUserInput) {
    return this.authService.login(body)
  }
}
