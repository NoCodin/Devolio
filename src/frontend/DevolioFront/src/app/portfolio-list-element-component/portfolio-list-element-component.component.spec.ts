import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioListElementComponentComponent } from './portfolio-list-element-component.component';

describe('PortfolioListElementComponentComponent', () => {
  let component: PortfolioListElementComponentComponent;
  let fixture: ComponentFixture<PortfolioListElementComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioListElementComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioListElementComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
