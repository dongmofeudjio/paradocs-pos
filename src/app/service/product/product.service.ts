import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiUrl } from 'src/app/api/api.url';
import { Product } from 'src/app/entity/product';


/**
 * @author : Dongmo Feudjio
 * 
 * @description
 * angular service to return products by category or all product availables
 *
 * **/
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getAll() : Observable<Product[]> {
    return this.httpClient.get<Product[]>(ApiUrl.product.getAll);
  }

  getByCategory(category : string) : Observable<Product[]> {
    return this.getAll()
    .pipe(
      map( products => products.filter(product => product.Category==category))
    );
  }

}
