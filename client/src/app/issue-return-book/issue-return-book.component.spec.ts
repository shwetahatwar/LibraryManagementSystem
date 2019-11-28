import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueReturnBookComponent } from './issue-return-book.component';

describe('IssueReturnBookComponent', () => {
  let component: IssueReturnBookComponent;
  let fixture: ComponentFixture<IssueReturnBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueReturnBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueReturnBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
