import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreatePortfolioBodyDto } from './dto/create-portfolio.dto';
import { Portfolio } from './portfolio.interface';
import { PortfolioService } from './portfolio.service';

@Controller('portfolio')
export class PortfolioController {
  constructor(private portfiolioService: PortfolioService) { }

  @Get()
  getAllPortfolios(): Promise<Portfolio[]> {
    return this.portfiolioService.findAll();
  }
  @Get(':id')
  findOneById(@Param('id') id: string) {
    return this.portfiolioService.findById(Number(id));
  }
  @Post()
  createPortfolio(@Body() body: CreatePortfolioBodyDto): Portfolio {
    return.this.portfiolioService.createPortfolio(body);
  }
}
