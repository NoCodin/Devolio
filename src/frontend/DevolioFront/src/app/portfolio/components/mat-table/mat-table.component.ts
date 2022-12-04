import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Portfolio } from '../../models/create-portfolio.dto';
import { PortfolioService } from '../../services/portfolio.service';

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
  isFullmode = false;
  id!: string;
  displayedColumns!: string[];

  portfolioPreviewColumns: string[] = [
    'developerName',
    'bio',
    'developerType',
    'workExperiences',
    'knownTechnologies',
  ];
  portfolioListColumn: string[] = ['developerName', 'developerType', 'buttons'];
  //todo maybe filter and hide columns
  // columnDefinitions = [{ def: 'id', hide: this.displayedColumns }];
  // getDisplayedColumns() {
  //   this.columns = this.columnDefinitions
  //     .filter((cd) => !cd.hide)
  //     .map((cd) => cd.def);
  // }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if ((this.isFullmode = !this.id)) {
      this.displayedColumns = this.portfolioListColumn;
    } else {
      this.displayedColumns = this.portfolioPreviewColumns;
      this.portfolioService
        .getPortfolioById(this.id)
        .subscribe((portfolio) => this.dataSource.push(portfolio));
    }
  }
}
