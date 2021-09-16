
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ApiUrl } from 'src/app/api/api.url';
import products from "../../../assets/mock/products.json";
import { ProductService } from './product.service';

describe('ProductService', () => {

  let service: ProductService;
  let httpMock: HttpTestingController;

  beforeEach(() =>  {
    TestBed.configureTestingModule({ 
      imports: [HttpClientTestingModule ],
      providers: [ProductService]
    }).compileComponents();
    service = TestBed.get(ProductService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getAll and getByCategory should return consistent array from observable', () => {
    
    service.getAll().subscribe(value => {
      expect(value.length).toBeGreaterThan(0);
    });
    service.getByCategory("Vélo de montagne").subscribe(value => {
      expect(value.length).toBe(11);
    });
    httpMock.match(ApiUrl.product.getAll).forEach(r => r.flush(products));
    
  });

  afterEach(() => {
    httpMock.verify();
  });
  
});
