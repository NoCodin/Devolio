import { Injectable } from '@nestjs/common';
import { Portfolio } from './portfolio.interface';

@Injectable()
export class PortfolioService {
  portfolio: Portfolio;

  async findAll(): Promise<Portfolio> {
    return await this.portfolio;
  }
  //   constructor(private portfolio: Portfolio<Portfolio>);
}
