import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioPreviewComponent } from './components/portfolio-preview/portfolio-preview.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioEditComponent } from './components/portfolio-edit/portfolio-edit.component';
import { SharedModule } from '../shared/shared.module';
import { PortfolioListComponent } from './components/portfolio-list/portfolio-list.component';

@NgModule({
  declarations: [
    PortfolioListComponent,
    PortfolioPreviewComponent,
    PortfolioEditComponent,
  ],
  imports: [CommonModule, PortfolioRoutingModule, SharedModule],
})
export class PortfolioModule {}
