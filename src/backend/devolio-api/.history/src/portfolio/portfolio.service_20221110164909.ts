import { Injectable } from '@nestjs/common';
import { identity } from 'rxjs';
import { developerType } from './developer-type.enum';
import { CreatePortfolioBodyDto } from './dto/create-portfolio.dto';
import { Portfolio } from './portfolio.interface';

@Injectable()
export class PortfolioService {
  // portfolios: Portfolio[];

  potfolioUno: Portfolio = {
    id: 1,
    developerName: 'Mariusz',
    bio: 'jakie bio kur?',
    developerType: developerType.BACKEND,
    workExperiences: ['raz', 'dwa', 'trzy'],
    knownTechnologies: ['java', 'python'],
  };
  potfolioDuo: Portfolio = {
    id: 2,
    developerName: 'Miroslaw',
    bio: 'łymen',
    developerType: developerType.FULLSTACK,
    workExperiences: ['razraz', 'dwadwa', 'trzyrzs'],
    knownTechnologies: ['javascript', 'html'],
  };
  portfolios = [this.potfolioUno, this.potfolioDuo];

  async findAll() {
    return this.portfolios;
  }
  async findById(portfolioId: number) {
    // return this.portfolios.find((portfolio) => portfolio.id === portfolioId);
  }
  async createPortfolio(createPortfolio: CreatePortfolioBodyDto): Portfolio {
    newPortfolio: Portfolio = {
      id: 4,
      developerName: createPortfolio.developerName,
      bio: 'łymen',
      developerType: developerType.FULLSTACK,
      workExperiences: ['razraz', 'dwadwa', 'trzyrzs'],
      knownTechnologies: ['javascript', 'html'],
    };
    return newPortfolio;
    // this.portfolios.push(newPortfolio);
    // return newPortfolio;
  }
}
