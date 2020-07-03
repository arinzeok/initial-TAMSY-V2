import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeApprovalApplicationComponent } from './type-approval-application.component';

describe('TypeApprovalApplicationComponent', () => {
  let component: TypeApprovalApplicationComponent;
  let fixture: ComponentFixture<TypeApprovalApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeApprovalApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeApprovalApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
