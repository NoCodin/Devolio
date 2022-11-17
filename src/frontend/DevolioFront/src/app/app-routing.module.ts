import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioListComponent } from './portfolio-list-component/portfolio-list.component';

const routes: Routes = [
  { path: 'portfolios', component: PortfolioListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
