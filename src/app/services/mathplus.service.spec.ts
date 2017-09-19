import { TestBed, inject } from '@angular/core/testing';

import { MathplusService } from './mathplus.service';

describe('MathplusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MathplusService]
    });
  });

  it('should be created', inject([MathplusService], (service: MathplusService) => {
    expect(service).toBeTruthy();
  }));
});
