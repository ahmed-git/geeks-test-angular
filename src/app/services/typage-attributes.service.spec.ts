import { TestBed } from '@angular/core/testing';

import { TypageAttributesService } from './typage-attributes.service';

describe('TypageAttributesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypageAttributesService = TestBed.get(TypageAttributesService);
    expect(service).toBeTruthy();
  });
});
