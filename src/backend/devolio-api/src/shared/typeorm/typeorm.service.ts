import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Portfolio } from 'src/portfolio/portfolio.entity';
import { User } from 'src/users/enitites/User';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  @Inject(ConfigService)
  private readonly config: ConfigService;

  public createTypeOrmOptions(): TypeOrmModuleOptions {
    const DB_URL = process.env.DATABASE_URL;

    let partialOptions = DB_URL
      ? {
          url: DB_URL,
        }
      : {
          host: this.config.get<string>('DATABASE_HOST'),
          port: this.config.get<number>('DATABASE_PORT'),
          database: this.config.get<string>('DATABASE_NAME'),
          username: this.config.get<string>('DATABASE_USER'),
          password: this.config.get<string>('DATABASE_PASSWORD'),
        };
    return {
      ...partialOptions,
      type: 'postgres',

      // entities: ['dist/**/*.entity.{ts,js}'],
      entities: [Portfolio, User],
      migrations: ['dist/migrations/*.{ts,js}'],
      migrationsTableName: 'typeorm_migrations',
      logger: 'file',
      synchronize: false, // never use TRUE in production!
    };
  }
}
