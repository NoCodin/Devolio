import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioListElementComponentComponent } from './portfolio-list-element-component/portfolio-list-element-component.component';
import { PortfolioListComponentComponent } from './portfolio-list-component/portfolio-list-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    PortfolioListComponentComponent,
    PortfolioListElementComponentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
