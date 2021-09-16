
import { TestBed } from '@angular/core/testing';
import categories from "../../../assets/mock/categories.json";
import { CategoryService } from './category.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { ApiUrl } from 'src/app/api/api.url';
describe('CategoryService', () => {

  let service: CategoryService;
  let httpMock: HttpTestingController;

  beforeEach(() =>{
    TestBed.configureTestingModule({ 
      imports: [HttpClientTestingModule ],
      providers: [CategoryService]
    }).compileComponents();
    service = TestBed.get(CategoryService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getAll should return consistent array from observable', () => {

    service.getAll().subscribe(value => {
      expect(value.length).toBeGreaterThan(0);
      expect(value).toEqual(categories);
    });
    const request = httpMock.expectOne( ApiUrl.category.getAll);
    request.flush(categories);
    
  });

  afterEach(() => {
    httpMock.verify();
  });

});
