import { TestBed } from '@angular/core/testing';

import { AlbumGuardService } from './album-guard.service';

describe('AlbumGuardService', () => {
  let service: AlbumGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbumGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
