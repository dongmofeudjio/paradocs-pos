import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/entity/product';
import { PosComponent } from './pos.component';

@Component({
  selector: 'pos-product-comp',
  template: `POS PRODUCT COMPONENT `
})
export class PosProductComponent extends PosComponent {

  @Input()
  product : Product;

  @Output()
  onProduct : EventEmitter<Product> = new EventEmitter<Product>();
  
  selectProduct(product ?: Product){
    this.onProduct.emit(product || this.product);
  }

}
