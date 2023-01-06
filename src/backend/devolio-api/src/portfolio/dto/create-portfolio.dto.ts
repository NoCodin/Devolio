import { IsNotEmpty, IsString } from 'class-validator';
import { developerType } from '../developer-type.enum';

export class CreatePortfolioBodyDto {
  @IsString()
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
