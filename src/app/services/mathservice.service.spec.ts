import { TestBed, inject } from '@angular/core/testing';

import { MathserviceService } from './mathservice.service';

describe('MathserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MathserviceService]
    });
  });

  it('should be created', inject([MathserviceService], (service: MathserviceService) => {
    expect(service).toBeTruthy();
  }));
});
