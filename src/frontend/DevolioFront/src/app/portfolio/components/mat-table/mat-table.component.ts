import { Component, Input, OnInit } from '@angular/core';
import { Portfolio } from '../../models/create-portfolio.dto';

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.scss'],
})
export class MatTableComponent implements OnInit {
  @Input()
  dataSource!: Portfolio[];

  //todo
  // displayedColumns: string[] = [
  //   'id',
  //   'developerName',
  //   'bio',
  //   'developerType',
  //   'workExperiences',
  //   'knownTechnologies',
  //   'preview',
  // ];
  displayedColumns: string[] = ['developerName', 'developerType', 'preview'];

  constructor() {}
  ngOnInit(): void {}
}
