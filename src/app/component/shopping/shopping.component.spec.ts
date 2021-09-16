import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryService } from 'src/app/service/category/category.service';
import { MockCategoryService } from 'src/app/service/category/category.service.mock';
import { ProductService } from 'src/app/service/product/product.service';
import { MockProductService } from 'src/app/service/product/product.service.mock';
import { ServiceProviderService } from 'src/app/service/service-provider/service-provider.service';
import { CategoryListingComponent } from '../category-listing/category-listing.component';
import { PosComponent } from '../pos.component';
import { PosProductComponent } from '../pos.product.component';
import { PosProductListComponent } from '../pos.product.list.component';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductListingComponent } from '../product-listing/product-listing.component';
import { ProductPurchaseListComponent } from '../product-purchase-list/product-purchase-list.component';
import { ProductPurchaseComponent } from '../product-purchase/product-purchase.component';

import { ShoppingComponent } from './shopping.component';

describe('ShoppingComponent', () => {
  let component: ShoppingComponent;
  let fixture: ComponentFixture<ShoppingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ShoppingComponent,
        CategoryListingComponent,
        ProductListingComponent,
        ProductCardComponent,
        ProductPurchaseComponent,
        ProductPurchaseListComponent,
        PosProductComponent,
        PosComponent,
        PosProductListComponent
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
    fixture = TestBed.createComponent(ShoppingComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
