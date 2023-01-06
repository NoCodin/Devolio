import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreatePortfolioBodyDto } from './dto/create-portfolio.dto';
import { UpdatePortfolioBodyDto } from './dto/update-portfolio.dto';
import { Portfolio } from './portfolio.interface';
import { PortfolioService } from './portfolio.service';

@Controller('portfolio')
export class PortfolioController {
  constructor(private portfiolioService: PortfolioService) {}

  @Get()
  getAllPortfolios(): Portfolio[] {
    return this.portfiolioService.findAll();
  }

  @Get(':id')
  findOneById(@Param('id') id: string) {
    return this.portfiolioService.findById(Number(id));
  }

  @Post()
  createPortfolio(@Body() body: CreatePortfolioBodyDto) {
    return this.portfiolioService.createPortfolio(body);
  }

  @Delete(':id')
  deletPortfolio(@Param('id') id) {
    this.portfiolioService.deletePortfolio(id);
  }

  @Put(':id')
  updatePortfolio(
    @Body() updatePortfolio: UpdatePortfolioBodyDto,
    @Param('id') id: number,
  ) {
    return this.portfiolioService.updatePortfolio(id, updatePortfolio);
  }
}
