import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioListComponent } from './components/portfolio-list/portfolio-list.component';
import { PortfolioPreviewComponent } from './components/portfolio-preview/portfolio-preview.component';
const routes: Routes = [
  { path: '', component: PortfolioListComponent },
  { path: ':id', component: PortfolioPreviewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfolioRoutingModule {}
