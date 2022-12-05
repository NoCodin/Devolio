import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Portfolio } from '../../models/create-portfolio.dto';
import { PortfolioService } from '../../services/portfolio.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.scss'],
})
export class MatTableComponent implements OnInit {
  @Input()
  dataSource!: Portfolio[];

  constructor(
    private route: ActivatedRoute,
    private portfolioService: PortfolioService
  ) {}

  columns!: string[];
  isPreview = false;
  id!: string;
  displayedColumns: string[] = [];

  portfolioPreviewColumns: string[] = [
    'developerName',
    'bio',
    'developerType',
    'workExperiences',
    'knownTechnologies',
    'edit',
  ];
  portfolioListColumn: string[] = [
    'developerName',
    'developerType',
    'editView',
  ];

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if ((this.isPreview = !this.id)) {
      this.displayedColumns = this.portfolioListColumn;
    } else {
      this.displayedColumns = this.portfolioPreviewColumns;
    }
  }
}
