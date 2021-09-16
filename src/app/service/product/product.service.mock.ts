
import { of } from "rxjs";
import { Product } from "src/app/entity/product";
import { ProductService } from "src/app/service/product/product.service";
import products from "../../../assets/mock/products.json";

export class MockProductService extends ProductService{

    getAll (){
        return of(<Product[]>products);
    }

    getByCategory (category : string)  {
        return of((<Product[]>products).filter(product => product.Category==category));
    }

}

