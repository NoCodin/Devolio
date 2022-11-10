import { Controller, Get } from '@nestjs/common';

@Controller('portfolio')
export class PortfolioController {
    @Get()
  findOne() {
    return '';
  }
}
