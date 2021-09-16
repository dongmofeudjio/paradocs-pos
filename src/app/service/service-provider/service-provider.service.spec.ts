import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CategoryService } from '../category/category.service';
import { ProductService } from '../product/product.service';

import { ServiceProviderService } from './service-provider.service';

describe('ServiceProviderService', () => {

  let service : ServiceProviderService;

  beforeEach(() =>  {
    TestBed.configureTestingModule({ 
      imports: [HttpClientTestingModule ],
      providers: [ProductService,CategoryService]
    }).compileComponents();
    service = TestBed.get(ServiceProviderService);
  });

  it('should be created', () => {
    expect(service).toBeDefined();
  });

  it('category and product service be created', () => {
    expect(service.categoryService).toBeDefined();
    expect(service.productService).toBeDefined();
  });

});
