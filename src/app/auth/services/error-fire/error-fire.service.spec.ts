import { TestBed } from '@angular/core/testing';

import { ErrorFireService } from './error-fire.service';

describe('ErrorFireService', () => {
  let service: ErrorFireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorFireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
