import { TestBed } from '@angular/core/testing';

import { VService } from './v.service';

describe('VService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VService = TestBed.get(VService);
    expect(service).toBeTruthy();
  });
});
