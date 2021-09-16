import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryService } from 'src/app/service/category/category.service';
import { ProductService } from 'src/app/service/product/product.service';
import { ServiceProviderService } from 'src/app/service/service-provider/service-provider.service';
import { PosComponent } from '../pos.component';
import { PosProductComponent } from '../pos.product.component';
import products from "../../../assets/mock/products.json";
import { ProductCardComponent } from './product-card.component';
import { Product } from 'src/app/entity/product';
import { MockCategoryService } from 'src/app/service/category/category.service.mock';
import { MockProductService } from 'src/app/service/product/product.service.mock';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let service : ServiceProviderService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosComponent,PosProductComponent,ProductCardComponent ],
      imports: [HttpClientTestingModule ],
      providers: [
        { provide: ProductService, useClass: MockProductService },
        { provide: CategoryService, useClass: MockCategoryService },
        ServiceProviderService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.get(ServiceProviderService);
    component = new ProductCardComponent(service);
  });

  it('product selection', () => {
    expect(component).toBeTruthy();
    let product = <Product>products[3];
    component.product = product;
    component.onProduct.subscribe(p => {
      expect(p).toEqual(product);
    })
    component.selectProduct();
  });
});
