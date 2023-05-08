import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth20';
import { AuthService } from '../auth.service';
@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor(@Inject() private authService: AuthService) {
    const env = process.env;
    super({
      clientID:
        '776819644658-jq5ec0pj6tqlnjkhihkig6q5t76g7pet.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:8000/auth/google/redirect',
      scope: ['profile', 'email'],
    });
  }
  async validate(accesToken: string, refreshToken: string, profile: Profile) {
    this.authService.validateUser({
      email: profile.emails[0].value,
      displayName: profile.displayName,
    });
  }
}
