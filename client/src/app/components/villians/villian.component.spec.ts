import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillianComponent } from "./villian.component";

describe('VilliansComponent', () => {
  let component: VillianComponent;
  let fixture: ComponentFixture<VillianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
