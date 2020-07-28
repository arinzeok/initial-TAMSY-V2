import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationCompeletedComponent } from './application-compeleted.component';

describe('ApplicationCompeletedComponent', () => {
  let component: ApplicationCompeletedComponent;
  let fixture: ComponentFixture<ApplicationCompeletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationCompeletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationCompeletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
