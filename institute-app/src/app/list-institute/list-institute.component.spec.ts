import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInstituteComponent } from './list-institute.component';

describe('ListInstituteComponent', () => {
  let component: ListInstituteComponent;
  let fixture: ComponentFixture<ListInstituteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListInstituteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListInstituteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
