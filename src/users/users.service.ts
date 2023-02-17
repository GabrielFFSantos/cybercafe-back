import { Inject, Injectable } from '@nestjs/common/decorators';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY') private usersRepository: Repository<User>,
  ) {}
  async readUsers() {
    return this.usersRepository.find();
  }
}
