import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioEditComponent } from './components/portfolio-edit/portfolio-edit.component';
import { PortfolioListComponent } from './components/portfolio-list/portfolio-list.component';
import { PortfolioPreviewComponent } from './components/portfolio-preview/portfolio-preview.component';

const routes: Routes = [
  { path: '', component: PortfolioListComponent },
  { path: 'add', component: PortfolioEditComponent },

  {
    path: ':id',
    component: PortfolioPreviewComponent,
  },
  {
    path: ':id/edit',
    component: PortfolioEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfolioRoutingModule {}
