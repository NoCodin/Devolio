import { developerType } from './developer-type.enum';

export interface Item {
    id?: number;
    developerName: string;
    bio: string;
    developerType: developerType;
    workExperiences: string[];
    knownTechnologies: [];
}
