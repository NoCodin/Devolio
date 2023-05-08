import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { GoogleStrategy } from './utils/GoogleStrategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/enitites/User';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [AuthService, GoogleStrategy],
  // providers: [
  //   GoogleStrategy,
  //   {
  //     provide: 'AUTH_SERVICE',
  //     useClass: AuthService,
  //   },
  // ],
})
export class AuthModule {}
