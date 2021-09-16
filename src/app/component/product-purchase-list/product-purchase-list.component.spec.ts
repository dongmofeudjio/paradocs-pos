import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryService } from 'src/app/service/category/category.service';
import { MockCategoryService } from 'src/app/service/category/category.service.mock';
import { ProductService } from 'src/app/service/product/product.service';
import { MockProductService } from 'src/app/service/product/product.service.mock';
import { ServiceProviderService } from 'src/app/service/service-provider/service-provider.service';
import { ProductPurchaseComponent } from '../product-purchase/product-purchase.component';

import { ProductPurchaseListComponent } from './product-purchase-list.component';

describe('ProductPurchaseListComponent', () => {
  let component: ProductPurchaseListComponent;
  let fixture: ComponentFixture<ProductPurchaseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ProductPurchaseListComponent,
        ProductPurchaseComponent
      ],
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
    fixture = TestBed.createComponent(ProductPurchaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
