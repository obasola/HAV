import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VilliansDashboardComponent } from './villians-dashboard.component';

describe('VilliansDashboardComponent', () => {
  let component: VilliansDashboardComponent;
  let fixture: ComponentFixture<VilliansDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VilliansDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VilliansDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
