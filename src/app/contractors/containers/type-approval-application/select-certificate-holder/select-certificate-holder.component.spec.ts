import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCertificateHolderComponent } from './select-certificate-holder.component';

describe('SelectCertificateHolderComponent', () => {
  let component: SelectCertificateHolderComponent;
  let fixture: ComponentFixture<SelectCertificateHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCertificateHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCertificateHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
