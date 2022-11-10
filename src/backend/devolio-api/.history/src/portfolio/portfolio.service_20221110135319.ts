import { Injectable } from '@nestjs/common';
import { CreatePortfolioBodyDto } from './dto/create-portfolio.dto';
import { Portfolio } from './portfolio.interface';

@Injectable()
export class PortfolioService {
  portfolios: Portfolio;

  async findAll(): Promise<Portfolio> {
    return this.portfolios;
  }
  async findById(portfolioId: number) {
    return this.portfolios.find((portfolio) => portfolio.id === portfolioId);
  }
  async createPortfolio(createPortfolio: CreatePortfolioBodyDto): Portfolio {
    const newPortfolio = createPortfolio;
    this.portfolios.push(newPortfolio);
    return newPortfolio;
  }
  //   constructor(private portfolio: Portfolio<Portfolio>);
}
