import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentListByAdminComponent } from './student-list-by-admin.component';

describe('StudentListByAdminComponent', () => {
  let component: StudentListByAdminComponent;
  let fixture: ComponentFixture<StudentListByAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentListByAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentListByAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
