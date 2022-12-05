import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Portfolio } from '../../models/create-portfolio.dto';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-portfolio-preview',
  templateUrl: './portfolio-preview.component.html',
  styleUrls: ['./portfolio-preview.component.scss'],
})
export class PortfolioPreviewComponent implements OnInit {
  portfoliosList: Portfolio[] = [];
  constructor(
    private route: ActivatedRoute,
    private portfolioService: PortfolioService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.portfolioService
      .getPortfolioById(id)
      .subscribe((portfolio) => (this.portfoliosList = [portfolio]));
  }
}
