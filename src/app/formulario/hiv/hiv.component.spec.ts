import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HivComponent } from './hiv.component';

describe('HivComponent', () => {
  let component: HivComponent;
  let fixture: ComponentFixture<HivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
