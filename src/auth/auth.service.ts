import { LoginUserInput } from './dto/login-user.input';
import { UsersService } from './../users/users.service';
import { Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  validateUser(userLoginInput: UserLogin) {
    const user = this.userService.findOne(user);
    if (!user) {
      return null;
    }
    return user;
  }

  login(input: LoginUserInput): User {
    return this.validateUser(input);
  }
}
