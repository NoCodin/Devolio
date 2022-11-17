import { NestFactory } from '@nestjs/core';
import { PortfolioModule } from './portfolio/portfolio.module';

async function bootstrap() {
  const app = await NestFactory.create(PortfolioModule);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
