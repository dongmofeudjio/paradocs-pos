import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Product } from 'src/app/entity/product';
import { PosComponent } from '../pos.component';
import { ProductPurchaseListComponent } from '../product-purchase-list/product-purchase-list.component';

/**
 * @author : Dongmo Feudjio
 * 
 * @description
 * component to show current shopping: category listing, product listing and current cart
 *
 * **/
@Component({
  selector: 'pos-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent extends PosComponent {

  @ViewChild(ProductPurchaseListComponent,{static:false})
  productPurchaseListComponent : ProductPurchaseListComponent;

  products : Product[]=[];

  formGroup : FormGroup = new FormGroup({});
  
  onProducts(products : Product[]){
    this.products = products;
  }

  onProduct(product : Product){
    this.productPurchaseListComponent.add(product);
  }

}
