import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInstituteComponent } from './edit-institute.component';

describe('EditInstituteComponent', () => {
  let component: EditInstituteComponent;
  let fixture: ComponentFixture<EditInstituteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInstituteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInstituteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
