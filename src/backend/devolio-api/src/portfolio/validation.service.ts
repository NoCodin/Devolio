import { Injectable } from '@nestjs/common';
import { UpdatePortfolioBodyDto } from './dto/update-portfolio.dto';
import { Portfolio } from './portfolio.entity';

@Injectable()
export class ValidationService {
  portfolioIsValid(portfolio: Portfolio): boolean {
    const validator = require('validator');
    return (
      validator.isLength(portfolio.developerName, { min: 3, max: 40 }) &&
      !validator.isEmpty(portfolio.developerType, {
        ignore_whitespace: false,
      }) &&
      !validator.isEmpty(portfolio.bio, {
        ignore_whitespace: false,
      }) &&
      !validator.isEmpty(portfolio.knownTechnologies, {
        ignore_whitespace: false,
      }) &&
      !validator.isEmpty(portfolio.workExperiences, {
        ignore_whitespace: false,
      })
    );
  }
}
