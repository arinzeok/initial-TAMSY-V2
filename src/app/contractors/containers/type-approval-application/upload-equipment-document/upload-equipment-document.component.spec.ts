import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadEquipmentDocumentComponent } from './upload-equipment-document.component';

describe('UploadEquipmentDocumentComponent', () => {
  let component: UploadEquipmentDocumentComponent;
  let fixture: ComponentFixture<UploadEquipmentDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadEquipmentDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadEquipmentDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
