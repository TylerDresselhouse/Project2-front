import { TestBed, inject } from '@angular/core/testing';

import { SwimLaneService } from './swim-lane.service';

describe('SwimLaneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SwimLaneService]
    });
  });

  it('should be created', inject([SwimLaneService], (service: SwimLaneService) => {
    expect(service).toBeTruthy();
  }));
});
