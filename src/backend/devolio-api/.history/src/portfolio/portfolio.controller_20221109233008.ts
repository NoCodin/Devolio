import { Controller, Get, Post } from '@nestjs/common';

@Controller('portfolio')
export class PortfolioController {
  @Get()
  findOne() {
    return '';
  }
  @Post
}
