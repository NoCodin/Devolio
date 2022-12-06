import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioListComponent } from './portfolio/components/portfolio-list/portfolio-list.component';
import { PortfolioPreviewComponent } from './portfolio/components/portfolio-preview/portfolio-preview.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioEditComponent } from './portfolio/components/portfolio-edit/portfolio-edit.component';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [
    PortfolioListComponent,
    PortfolioPreviewComponent,
    PortfolioEditComponent,
  ],
  imports: [CommonModule, PortfolioRoutingModule, SharedModule],
})
export class PortfolioModule {}
