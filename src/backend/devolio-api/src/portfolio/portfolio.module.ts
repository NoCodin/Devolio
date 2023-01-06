import { Module } from '@nestjs/common';
import { PortfolioController } from './portfolio.controller';
import { PortfolioService } from './portfolio.service';

@Module({
  providers: [PortfolioService],
  controllers: [PortfolioController],
})
export class PortfolioModule {}
