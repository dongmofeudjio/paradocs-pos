import { Component } from '@angular/core';
import { Product } from 'src/app/entity/product';
import { PosProductListComponent } from '../pos.product.list.component';

/**
 * @author : Dongmo Feudjio
 * 
 * @description
 * listing of all product availables by category
 *
 * **/
@Component({
  selector: 'pos-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent  extends PosProductListComponent {

  selectProduct(product ?: Product){
   if(product.price >= 0) super.selectProduct(product);
  }

}
