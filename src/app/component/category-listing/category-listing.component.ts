import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/entity/product';
import { PosComponent } from '../pos.component';
import { Category } from './model';

/**
 * @author : Dongmo Feudjio
 * 
 * @description
 * component to list all categories.
 * When user click products of category will be rendered
 *
 * **/
@Component({
  selector: 'pos-category-listing',
  templateUrl: './category-listing.component.html',
  styleUrls: ['./category-listing.component.scss']
})
export class CategoryListingComponent extends PosComponent {

  listing : Category[];
  
  @Output()
  products : EventEmitter<Product[]> = new EventEmitter<Product[]>();

  ngOnInit() {
    super.ngOnInit();
    this.load();
  }

  load(){
    this.serviceProvider.categoryService.getAll()
    .subscribe(categories => this.listing = categories.map<Category>(cat => { return {...cat,selected : false}}));
  }

  select(category : Category){
    this.listing.forEach(cat => cat.selected = false);
    category.selected = true;
    this.serviceProvider.productService.getByCategory(category.Category)
    .subscribe(products => this.products.emit(products));
  }

}

