import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth20';
import { AuthService } from '../auth.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authService: AuthService,
    @Inject(ConfigService) configService: ConfigService,
  ) {
    super({
      clientID: configService.get<string>('CLIENT_ID'),
      clientSecret: configService.get<string>('CLIENT_SECRET'),
      callbackURL: configService.get<string>('CALLBACK_URL'),
      scope: ['profile', 'email'],
    });
  }
  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    console.log(accessToken);
    console.log(refreshToken);
    console.log(profile);
    const user = await this.authService.validateUser({
      email: profile.emails[0].value,
      displayName: profile.displayName,
    });
    return user || null;
  }
}
