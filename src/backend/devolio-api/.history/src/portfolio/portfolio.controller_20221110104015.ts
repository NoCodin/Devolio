import { Controller, Get, Post } from '@nestjs/common';
import { Portfolio } from './portfolio.interface';
import { PortfolioService } from './portfolio.service';

@Controller('portfolio')
export class PortfolioController {
  constructor(private portfiolioService: PortfolioService);
  
  @Get()
  findAll(): Promise<Portfolio[]> {
      return this.portfiolioService.findAll();
  }
  @Get()
  findOne() {
    return '';
  }
}
