import { TestBed, inject } from '@angular/core/testing';

import { NewtaskService } from './newtask.service';

describe('NewtaskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewtaskService]
    });
  });

  it('should be created', inject([NewtaskService], (service: NewtaskService) => {
    expect(service).toBeTruthy();
  }));
});
