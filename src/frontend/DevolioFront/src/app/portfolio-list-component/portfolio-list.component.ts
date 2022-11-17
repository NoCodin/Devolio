import { Component, OnInit } from '@angular/core';
import { Portfolio } from '../portfolio/dtos/create-portfolio.dto';
import { PortfolioService } from '../portfolio/portfolio.service';

@Component({
  selector: 'app-portfolio-list-component',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.scss'],
})
export class PortfolioListComponent implements OnInit {
  portfoliosList: Portfolio[] = [];
  constructor(private portfolioService: PortfolioService) {}
  ngOnInit(): void {
    this.portfolioService
      .getPortfolios()
      .subscribe((portfolio) => (this.portfoliosList = portfolio));
    console.log(this.portfoliosList);
  }
}
