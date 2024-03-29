import { PassportSerializer } from '@nestjs/passport';
import { AuthService } from '../auth.service';
import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/users/enitites/User';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authService: AuthService,
  ) {
    super();
  }
  serializeUser(user: User, done: Function) {
    done(null, user);
  }
  async deserializeUser(payload: any, done: Function) {
    const user = this.authService.findUser(payload.id);
    return user ? done(null, user) : done(null, null);
  }
}
