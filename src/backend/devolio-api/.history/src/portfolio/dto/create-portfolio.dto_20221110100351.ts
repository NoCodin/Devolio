import { developerType } from '../developer-type.enum';

export class CreatePortfolioBodyDto {
  readonly id: number;
  readonly developerName: string;
  readonly bio: string;
  readonly developerType: developerType;
  readonly workExperiences: string[];
  readonly knownTechnologies: string[];
}
