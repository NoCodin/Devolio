import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Portfolio } from '../../models/update-portfolio.dto';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-portfolio-edit',
  templateUrl: './portfolio-edit.component.html',
  styleUrls: ['./portfolio-edit.component.scss'],
})
export class PortfolioEditComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private portfolioService: PortfolioService
  ) {}
  portfolio!: Portfolio;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.portfolioService
      .getPortfolioById(id)
      .subscribe((portfolio) => (this.portfolio = portfolio));
  }
}
