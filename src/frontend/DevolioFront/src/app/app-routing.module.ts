import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioListComponentComponent } from './portfolio-list-component/portfolio-list-component.component';

const routes: Routes = [
  { path: 'portfolios', component: PortfolioListComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
