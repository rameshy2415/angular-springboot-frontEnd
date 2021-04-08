import { TestBed } from '@angular/core/testing';

import { ImageAPIService } from './image-api.service';

describe('ImageAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImageAPIService = TestBed.get(ImageAPIService);
    expect(service).toBeTruthy();
  });
});
