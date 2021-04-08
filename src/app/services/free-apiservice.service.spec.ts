import { TestBed } from '@angular/core/testing';

import { FreeAPIserviceService } from './free-apiservice.service';

describe('FreeAPIserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FreeAPIserviceService = TestBed.get(FreeAPIserviceService);
    expect(service).toBeTruthy();
  });
});
