import { Injectable } from '@nestjs/common';
import { identity } from 'rxjs';
import { developerType } from './developer-type.enum';
import { CreatePortfolioBodyDto } from './dto/create-portfolio.dto';
import { Portfolio } from './portfolio.interface';

@Injectable()
export class PortfolioService {
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

  findAll() {
    return this.portfolios;
  }
  findById(portfolioId: number) {
    return this.portfolios.find((id) => id.id === portfolioId);
  }
  createPortfolio(createPortfolio: CreatePortfolioBodyDto) {
    newPortfolio: Portfolio = {
      developerName: createPortfolio.developerName,
      bio: createPortfolio.bio,
      developerType: createPortfolio.developerType,
      workExperiences: createPortfolio.workExperiences,
      knownTechnologies: createPortfolio.knownTechnologies,
    };
    //tu nie wiem jak zwrocic to newPortfolio
    return 'created';
    // this.portfolios.push(newPortfolio);
    // return newPortfolio;
  }
  deletePortfolio(portfolioId: number) {
    return 'ok';
  }
  updatePortfolio(portfolioId: number, body: CreatePortfolioBodyDto) {
    return this.portfolios.find((id) => id.id === portfolioId);
  }
}
