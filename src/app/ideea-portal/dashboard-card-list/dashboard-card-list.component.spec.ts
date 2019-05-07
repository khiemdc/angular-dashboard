import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCardListComponent } from './dashboard-card-list.component';

describe('DashboardCardListComponent', () => {
  let component: DashboardCardListComponent;
  let fixture: ComponentFixture<DashboardCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
