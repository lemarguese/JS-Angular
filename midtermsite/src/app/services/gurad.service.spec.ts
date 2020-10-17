import { TestBed } from '@angular/core/testing';

import { GuradService } from './gurad.service';

describe('GuradService', () => {
  let service: GuradService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuradService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
