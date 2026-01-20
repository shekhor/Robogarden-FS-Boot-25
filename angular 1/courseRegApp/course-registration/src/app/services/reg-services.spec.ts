import { TestBed } from '@angular/core/testing';

import { RegServices } from './reg-services';

describe('RegServices', () => {
  let service: RegServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
