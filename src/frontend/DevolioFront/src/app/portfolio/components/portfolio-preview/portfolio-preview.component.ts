import { Component, OnInit } from '@angular/core';
import { Portfolio } from '../../models/create-portfolio.dto';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-portfolio-preview',
  templateUrl: './portfolio-preview.component.html',
  styleUrls: ['./portfolio-preview.component.scss'],
})
export class PortfolioPreviewComponent implements OnInit {
  portfolio!: Portfolio;
  constructor(private portfolioService: PortfolioService) {}

  getPortfolioById(portfolioId: number) {
    this.portfolioService
      .getPortfolioById(portfolioId)
      .subscribe((portfolio) => (this.portfolio = portfolio));
  }
  ngOnInit(): void {}
}
