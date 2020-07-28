import { TestBed } from '@angular/core/testing';

import { EquipmentListService } from './equipment-list.service';

describe('EquipmentListService', () => {
  let service: EquipmentListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipmentListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
