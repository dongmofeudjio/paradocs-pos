import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiUrl } from 'src/app/api/api.url';
import { Classification } from 'src/app/entity/classification';

/**
 * @author : Dongmo Feudjio
 * 
 * @description
 * angular service to retourn all categories
 *
 * **/
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  getAll() : Observable<Classification[]> {
    return this.httpClient.get<Classification[]>(ApiUrl.category.getAll);
  }
  
}
