import { IsNotEmpty, IsString } from 'class-validator';
import { developerType } from '../developer-type.enum';

export class CreatePortfolioBodyDto {
  @IsString()
  @IsNotEmpty()
  developerName: string;
  bio: string;
  developerType: developerType;
  workExperiences: string[];
  knownTechnologies: string[];
}
