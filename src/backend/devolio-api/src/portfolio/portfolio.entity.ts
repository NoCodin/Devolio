import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { developerType } from './developer-type.enum';

@Entity()
export class Portfolio {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column({ type: 'varchar', length: 120 })
  public developerName: string;

  @Column({ type: 'varchar', length: 120 })
  public bio: string;

  @Column({ type: 'varchar', length: 120 })
  public developerType: developerType;

  @Column({ type: 'varchar', length: 120 })
  public workExperiences: string[];

  @Column({ type: 'varchar', length: 120 })
  public knownTechnologies: string[];
}
