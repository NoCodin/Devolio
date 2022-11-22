import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioListElementComponent } from './portfolio-list-element.component';

describe('PortfolioListElementComponentComponent', () => {
  let component: PortfolioListElementComponent;
  let fixture: ComponentFixture<PortfolioListElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PortfolioListElementComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PortfolioListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
