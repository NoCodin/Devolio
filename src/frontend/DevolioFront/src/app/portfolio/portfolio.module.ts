import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioListComponent } from './components/portfolio-list/portfolio-list.component';
import { PortfolioPreviewComponent } from './components/portfolio-preview/portfolio-preview.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioEditComponent } from './components/portfolio-edit/portfolio-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    PortfolioListComponent,
    PortfolioPreviewComponent,
    PortfolioEditComponent,
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSortModule,
    MatTableModule,
    MatButtonModule,
  ],
})
export class PortfolioModule {}
