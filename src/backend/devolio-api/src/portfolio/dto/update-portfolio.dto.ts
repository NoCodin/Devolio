import { IsNotEmpty } from 'class-validator';
import { developerType } from '../developer-type.enum';

export class UpdatePortfolioBodyDto {
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
