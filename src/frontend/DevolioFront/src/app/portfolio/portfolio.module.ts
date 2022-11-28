import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PortfolioListComponent } from './components/portfolio-list/portfolio-list.component';
import { PortfolioListElementComponent } from './components/portfolio-list-element/portfolio-list-element.component';
import { PortfolioPreviewComponent } from './components/portfolio-preview/portfolio-preview.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    PortfolioComponent,
    PortfolioListComponent,
    PortfolioListElementComponent,
    PortfolioPreviewComponent,
  ],
  imports: [CommonModule, PortfolioRoutingModule],
})
export class PortfolioModule {}
