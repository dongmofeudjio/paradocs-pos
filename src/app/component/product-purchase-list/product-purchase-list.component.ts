import { Component, Input, QueryList, ViewChildren } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Product } from 'src/app/entity/product';
import { ValueChange } from 'src/app/structure/value.change';
import { PosProductListComponent } from '../pos.product.list.component';
import { ProductPurchaseComponent } from '../product-purchase/product-purchase.component';
import { ProductPurchase } from '../product-purchase/product.purchase.model';

/**
 * @author : Dongmo Feudjio
 * 
 * @description
 * to show all product of cart , with total price of cart and button to empty cart
 *
 * **/
@Component({
  selector: 'pos-product-purchase-list',
  templateUrl: './product-purchase-list.component.html',
  styleUrls: ['./product-purchase-list.component.scss']
})
export class ProductPurchaseListComponent extends PosProductListComponent {

  products : ProductPurchase[] = [];

  @ViewChildren(ProductPurchaseComponent) 
  ppcs !: QueryList<ProductPurchaseComponent>;

  @Input()
  formGroup : FormGroup ;
  
  totalPrice : number=0;

  remove(product : Product){
    this.products=this.products.filter(p => p.Product!=product.Product);
  }

  add(product : Product){
    if(this.ppcs.filter(ppc => ppc.product.Product==product.Product).length==0){
      this.products.push(product);
    }
  }

  onTotalPrice(valueChange : ValueChange<number>){
    this.totalPrice = Number.parseFloat( ( ( this.totalPrice - valueChange.oldValue ) + valueChange.newValue ).toFixed(2));
  }

  removeAll(){
    this.formGroup.reset();
    this.products = [];
    this.totalPrice = 0 ;
  }

}
