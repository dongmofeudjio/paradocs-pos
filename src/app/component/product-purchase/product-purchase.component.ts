import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValueChange } from 'src/app/structure/value.change';
import { RandomStringGenerator } from 'src/app/utils/random.string.generator';
import { PosProductComponent } from '../pos.product.component';
import { ProductPurchase } from './product.purchase.model';

/**
 * @author : Dongmo Feudjio
 * 
 * @description
 * To show product in purchase with current quantity and relative tolta price
 * User can modify current quantity and remove product from cart
 *
 * **/
@Component({
  selector: 'pos-product-purchase',
  templateUrl: './product-purchase.component.html',
  styleUrls: ['./product-purchase.component.scss']
})
export class ProductPurchaseComponent extends PosProductComponent {

  @Input()
  product : ProductPurchase;
  
  @Input()
  formGroup : FormGroup ;

  @Input()
  name : string;

  formControl : FormControl;

  @Output()
  totalPrice : EventEmitter<ValueChange<number>> = new EventEmitter<ValueChange<number>>();

  @Output()
  destroy : EventEmitter<ProductPurchase> = new EventEmitter<ProductPurchase>();

  ngOnInit() {
    if(!this.product.quantity)this.product.quantity = 1;
    this.name=RandomStringGenerator.getRandomString(40);
    this.formControl =  new FormControl( this.product.quantity , [
      Validators.required,
      Validators.min(0)
    ]);
    this.formGroup.addControl(this.name,this.formControl);
    this.setTotalPrice();
  }

  quantityChange(quantity : number){
    if(quantity==0){
      this.close();
      return ;
    }
    this.product.quantity = quantity;
    this.setTotalPrice();
  }

  setTotalPrice(){
    let oldValue : number = this.product.totalPrice || 0;
    this.product.totalPrice = +(this.product.quantity*this.product.price).toFixed(2);
    this.totalPrice.emit({newValue: this.product.totalPrice,oldValue :oldValue});
  }

  close() {
    this.formGroup.removeControl(this.name);
    this.totalPrice.emit({newValue: 0,oldValue :this.product.totalPrice});
    this.destroy.emit(this.product);
  }

}
