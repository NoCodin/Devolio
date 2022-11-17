import { Component, OnInit, Input } from '@angular/core';
import { Portfolio } from '../portfolio/dtos/create-portfolio.dto';

@Component({
  selector: 'app-portfolio-list-element-component',
  templateUrl: './portfolio-list-element.component.html',
  styleUrls: ['./portfolio-list-element.component.scss'],
})
export class PortfolioListElementComponentComponent implements OnInit {
  @Input()
  portfolio: Portfolio[] = [];
  constructor() {}

  ngOnInit(): void {}
}
