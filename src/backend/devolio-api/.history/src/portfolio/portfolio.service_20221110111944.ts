import { Injectable } from '@nestjs/common';
import { Portfolio } from './portfolio.interface';

@Injectable()
export class PortfolioService {
  async findAll(): Promise<Portfolio[]> {
    return await this.
  //   constructor(private portfolio: Portfolio<Portfolio>);
}
