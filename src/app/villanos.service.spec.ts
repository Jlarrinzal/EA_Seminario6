import { TestBed } from '@angular/core/testing';

import { VillanosService } from './villanos.service';

describe('VillanosService', () => {
  let service: VillanosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VillanosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
