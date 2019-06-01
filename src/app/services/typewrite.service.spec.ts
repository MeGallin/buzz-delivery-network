import { TestBed } from '@angular/core/testing';

import { TypewriteService } from './typewrite.service';

describe('TypewriteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypewriteService = TestBed.get(TypewriteService);
    expect(service).toBeTruthy();
  });
});
