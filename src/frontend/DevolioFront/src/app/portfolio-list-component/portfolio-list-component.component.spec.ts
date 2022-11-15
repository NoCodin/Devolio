import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioListComponentComponent } from './portfolio-list-component.component';

describe('PortfolioListComponentComponent', () => {
  let component: PortfolioListComponentComponent;
  let fixture: ComponentFixture<PortfolioListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioListComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
