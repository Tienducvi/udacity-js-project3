import { TestBed } from '@angular/core/testing';

import { ProductsSettingServiceService } from './products-setting-service.service';

describe('ProductsSettingServiceService', () => {
  let service: ProductsSettingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsSettingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
