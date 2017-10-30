import { TestBed, inject } from '@angular/core/testing';

import { ComputerService } from './computer.service';

describe('ComputerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComputerService]
    });
  });

  it('should be created', inject([ComputerService], (service: ComputerService) => {
    expect(service).toBeTruthy();
  }));
});
