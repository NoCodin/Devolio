import { IsNotEmpty } from 'class-validator';
import { developerType } from '../developer-type.enum';

export class UpdatePortfolioBodyDto {
  // readonly developerName: string;
  // readonly bio: string;
  // readonly developerType: developerType;
  // readonly workExperiences: string[];
  // readonly knownTechnologies: string[];
  @IsNotEmpty()
  developerName: string;
  @IsNotEmpty()
  bio: string;
  @IsNotEmpty()
  developerType: developerType;
  @IsNotEmpty()
  workExperiences: string[];
  @IsNotEmpty()
  knownTechnologies: string[];
}
