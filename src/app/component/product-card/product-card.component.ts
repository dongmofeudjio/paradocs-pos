import { Component } from '@angular/core';
import { PosProductComponent } from '../pos.product.component';

/**
 * @author : Dongmo Feudjio
 * 
 * @description
 * product card
 * User can see product name and price
 *
 * **/
@Component({
  selector: 'pos-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent extends PosProductComponent {

}
