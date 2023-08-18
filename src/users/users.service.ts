import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      username: 'user',
      id: 1,
    },
  ];

  create(createUserInput: CreateUserInput) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(username: string): User {
    return this.users.find((i) => i.username === username);
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
