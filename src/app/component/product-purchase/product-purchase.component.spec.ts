import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Product } from 'src/app/entity/product';
import { CategoryService } from 'src/app/service/category/category.service';
import { MockCategoryService } from 'src/app/service/category/category.service.mock';
import { ProductService } from 'src/app/service/product/product.service';
import { MockProductService } from 'src/app/service/product/product.service.mock';
import { ServiceProviderService } from 'src/app/service/service-provider/service-provider.service';
import products from "../../../assets/mock/products.json";
import { ProductPurchaseComponent } from './product-purchase.component';

describe('ProductPurchaseComponent', () => {
  let component: ProductPurchaseComponent;
  let fixture: ComponentFixture<ProductPurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPurchaseComponent ],
      imports: [
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        { provide: ProductService, useClass: MockProductService },
        { provide: CategoryService, useClass: MockCategoryService },
        ServiceProviderService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPurchaseComponent);
    component = fixture.debugElement.componentInstance;
    let product = <Product>products[3];
    component.product = product;
    component.formGroup  =  new FormGroup({});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
