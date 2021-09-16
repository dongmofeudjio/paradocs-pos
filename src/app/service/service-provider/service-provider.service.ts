import { Injectable } from '@angular/core';
import { CategoryService } from '../category/category.service';
import { ProductService } from '../product/product.service';

/**
 * @author : Dongmo Feudjio
 * 
 * @description
 * angular service provider. 
 * All custom service will be grouped here
 *
 * **/
@Injectable({
  providedIn: 'root'
})
export class ServiceProviderService {

  constructor(
    public productService : ProductService,
    public categoryService : CategoryService
  ) { }

}
