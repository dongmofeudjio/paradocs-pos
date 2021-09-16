import { Component, Input } from '@angular/core';
import { Product } from 'src/app/entity/product';
import { PosProductComponent } from './pos.product.component';

@Component({
  selector: 'pos-product-list-comp',
  template: `POS PRODUCT lIST COMPONENT `
})
export class PosProductListComponent extends PosProductComponent {

  @Input()
  products : Product[];

}
