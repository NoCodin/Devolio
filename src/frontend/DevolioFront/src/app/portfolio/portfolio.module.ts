import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioListComponent } from './components/portfolio-list/portfolio-list.component';
import { PortfolioListElementComponent } from './components/portfolio-list-element/portfolio-list-element.component';
import { PortfolioPreviewComponent } from './components/portfolio-preview/portfolio-preview.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioEditComponent } from './components/portfolio-edit/portfolio-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableComponent } from './components/mat-table/mat-table.component';

@NgModule({
  declarations: [
    MatTableComponent,
    PortfolioListComponent,
    PortfolioListElementComponent,
    PortfolioPreviewComponent,
    PortfolioEditComponent,
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PortfolioModule {}
