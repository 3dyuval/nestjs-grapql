import { Injectable } from '@nestjs/common'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import { User } from './entities/user.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>
  ) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    const user = this.userRepository.create(createUserInput)
    return this.userRepository.save(user)
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find()
  }

  async findOne(username: string): Promise<User> {
    return this.userRepository.findOneByOrFail({ username })
  }

  async update(updateUserInput: UpdateUserInput) {
    return `This action updates a #${updateUserInput.id} user`
  }

  remove(id: number) {
    return `This action removes a #${id} user`
  }
}
