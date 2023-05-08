import { Controller, Get, UseGuards } from '@nestjs/common';
import { GoogleAuthGuard } from './utils/Guard';

@Controller('auth')
export class AuthController {
  @Get('google/login')
  @UseGuards(GoogleAuthGuard)
  loginHandler() {
    return { msg: 'G auth' };
  }

  @Get('google/redirect')
  @UseGuards(GoogleAuthGuard)
  redirectHandler() {
    return { msg: 'ok' };
  }
}
