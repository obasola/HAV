import { TestBed } from '@angular/core/testing';

import { AbilityApiService } from './ability-api.service';

describe('AbilityApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AbilityApiService = TestBed.get(AbilityApiService);
    expect(service).toBeTruthy();
  });
});
