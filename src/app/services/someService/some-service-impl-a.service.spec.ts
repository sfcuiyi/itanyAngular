import { TestBed, inject } from '@angular/core/testing';

import { SomeServiceImplAService } from './some-service-impl-a.service';

describe('SomeServiceImplAService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SomeServiceImplAService]
    });
  });

  it('should be created', inject([SomeServiceImplAService], (service: SomeServiceImplAService) => {
    expect(service).toBeTruthy();
  }));
});
