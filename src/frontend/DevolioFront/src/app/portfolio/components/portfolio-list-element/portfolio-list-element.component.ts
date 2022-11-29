import { Component, OnInit, Input } from '@angular/core';
import { Portfolio } from '../../models/create-portfolio.dto';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-portfolio-list-element-component',
  templateUrl: './portfolio-list-element.component.html',
  styleUrls: ['./portfolio-list-element.component.scss'],
})
export class PortfolioListElementComponent implements OnInit {
  @Input()
  portfolio!: Portfolio;
  constructor() {}

  ngOnInit(): void {}
}
