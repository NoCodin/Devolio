import { IsNotEmpty, IsString } from 'class-validator';
import { developerType } from '../developer-type.enum';

export class CreatePortfolioBodyDto {
  @IsString()
  @IsNotEmpty()
  readonly developerName: string;
  readonly bio: string;
  readonly developerType: developerType;
  readonly workExperiences: string[];
  readonly knownTechnologies: string[];
}
