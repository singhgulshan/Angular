import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInstituteComponent } from './view-institute.component';

describe('ViewInstituteComponent', () => {
  let component: ViewInstituteComponent;
  let fixture: ComponentFixture<ViewInstituteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewInstituteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInstituteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
