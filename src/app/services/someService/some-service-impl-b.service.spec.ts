import { TestBed, inject } from '@angular/core/testing';

import { SomeServiceImplBService } from './some-service-impl-b.service';

describe('SomeServiceImplBService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SomeServiceImplBService]
    });
  });

  it('should be created', inject([SomeServiceImplBService], (service: SomeServiceImplBService) => {
    expect(service).toBeTruthy();
  }));
});
