import { Injectable } from '@nestjs/common';
import { UserDetails } from './utils/types';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/enitites/User';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  async validateUser(details: UserDetails) {
    // return this.userRepository.findBy(details.email);
  }
}
