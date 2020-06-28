import { TestBed } from '@angular/core/testing';

import { VillianApiService } from './villian-api.service';

describe('VillianApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VillianApiService = TestBed.get(VillianApiService);
    expect(service).toBeTruthy();
  });
});
