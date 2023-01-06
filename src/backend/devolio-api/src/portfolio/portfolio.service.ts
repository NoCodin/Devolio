import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePortfolioBodyDto } from './dto/create-portfolio.dto';
import { UpdatePortfolioBodyDto } from './dto/update-portfolio.dto';
import { Portfolio } from './portfolio.entity';

@Injectable()
export class PortfolioService {
  @InjectRepository(Portfolio)
  private portfolioRepository: Repository<Portfolio>;

  findAll(): Promise<Portfolio[]> {
    return this.portfolioRepository.find();
  }

  public findById(id: number): Promise<Portfolio> {
    return this.portfolioRepository.findOne({ where: { id } });
  }

  createPortfolio(createPortfolio: CreatePortfolioBodyDto) {
    const newPortfolio = this.portfolioDtoToPortfolio(createPortfolio);
    this.portfolioRepository.save(newPortfolio);
    return newPortfolio;
  }

  deletePortfolio(portfolioId: number) {
    this.portfolioRepository.delete(portfolioId);
  }

  updatePortfolio(portfolioId: number, body: UpdatePortfolioBodyDto) {
    return this.portfolioRepository.update(
      portfolioId,
      this.portfolioDtoToPortfolio(body),
    );
  }

  portfolioDtoToPortfolio(createPortfolio: UpdatePortfolioBodyDto): Portfolio {
    const newPortfolio: Portfolio = {
      developerName: createPortfolio.developerName,
      bio: createPortfolio.bio,
      developerType: createPortfolio.developerType,
      workExperiences: createPortfolio.workExperiences,
      knownTechnologies: createPortfolio.knownTechnologies,
    };
    return newPortfolio;
  }
}
