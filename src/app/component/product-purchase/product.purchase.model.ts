import { Product } from "src/app/entity/product";

export interface ProductPurchase extends Product {
    
    quantity ?: number

    totalPrice ?: number
    
}