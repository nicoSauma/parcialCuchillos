import { TestBed } from '@angular/core/testing';

import { CuchilloService } from './cuchillo.service';

describe('CuchilloService', () => {
  let service: CuchilloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuchilloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
