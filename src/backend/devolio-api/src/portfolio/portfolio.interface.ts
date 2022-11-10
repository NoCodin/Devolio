import { developerType } from './developer-type.enum';

export interface Portfolio {
  id?: number;
  developerName: string;
  bio: string;
  developerType: developerType;
  workExperiences: string[];
  knownTechnologies: string[];
}
