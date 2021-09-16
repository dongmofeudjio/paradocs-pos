import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Type } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiUrl } from 'src/app/api/api.url';
import { CategoryService } from 'src/app/service/category/category.service';
import { ProductService } from 'src/app/service/product/product.service';
import { ServiceProviderService } from 'src/app/service/service-provider/service-provider.service';
import { MockCategoryService } from 'src/app/service/category/category.service.mock';
import { MockProductService } from 'src/app/service/product/product.service.mock';
import categories from "../../../assets/mock/categories.json";
import { CategoryListingComponent } from './category-listing.component';
import { Category } from './model';

describe('CategoryListingComponent', () => {
  let component: CategoryListingComponent;
  let fixture: ComponentFixture<CategoryListingComponent>;
  let httpMock: HttpTestingController;
  let listing  = categories.map<Category>(cat => { return {...cat,selected : false}});
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryListingComponent ],
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
    fixture = TestBed.createComponent(CategoryListingComponent);
    component = fixture.componentInstance;
    httpMock = fixture.debugElement.injector.get<HttpTestingController>(HttpTestingController as Type<HttpTestingController>);
    fixture.detectChanges();
  });

  it('should create and have listing', () => {
    expect(component).toBeTruthy();
    expect(component.listing).toEqual(listing);
  });

  afterEach(() => {
    httpMock.verify();
  });

});
