import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSpecificationStandardsComponent } from './add-specification-standards.component';

describe('AddSpecificationStandardsComponent', () => {
  let component: AddSpecificationStandardsComponent;
  let fixture: ComponentFixture<AddSpecificationStandardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSpecificationStandardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSpecificationStandardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
