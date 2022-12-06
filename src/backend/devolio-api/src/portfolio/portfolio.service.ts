import { Injectable } from '@nestjs/common';
import { identity } from 'rxjs';
import { developerType } from './developer-type.enum';
import { CreatePortfolioBodyDto } from './dto/create-portfolio.dto';
import { UpdatePortfolioBodyDto } from './dto/update-portfolio.dto';
import { Portfolio } from './portfolio.interface';

@Injectable()
export class PortfolioService {
  potfolioUno: Portfolio = {
    id: 1,
    developerName: 'Mariusz',
    bio: 'jakie bio?',
    developerType: developerType.BACKEND,
    workExperiences: ['raz', ' dwa', ' trzy'],
    knownTechnologies: ['java', ' python'],
  };
  potfolioDuo: Portfolio = {
    id: 2,
    developerName: 'Miroslaw',
    bio: 'łymen',
    developerType: developerType.FULLSTACK,
    workExperiences: ['raz', ' dwa', ' trzy'],
    knownTechnologies: ['javascript', ' html'],
  };
  portfolios = [this.potfolioUno, this.potfolioDuo];

  findAll() {
    return this.portfolios;
  }

  findById(portfolioId: number) {
    return this.portfolios.find((id) => id.id === portfolioId);
  }

  createPortfolio(createPortfolio: CreatePortfolioBodyDto) {
    const newPortfolio = this.portfolioDtoToPortfolio(createPortfolio);
    this.portfolios.push(newPortfolio);
    return newPortfolio;
  }

  deletePortfolio(portfolioId: number) {}

  updatePortfolio(portfolioId: number, body: UpdatePortfolioBodyDto) {
    return this.portfolios.find((id) => id.id === portfolioId);
  }

  portfolioDtoToPortfolio(createPortfolio: CreatePortfolioBodyDto): Portfolio {
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
