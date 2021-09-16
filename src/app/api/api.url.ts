import { environment } from "src/environments/environment";
import { ApiUrlModel } from "./api.url.model";

/**
 * @author : Dongmo Feudjio
 * 
 * @description
 * microservices api url
 *
 * **/
export const ApiUrl : ApiUrlModel = {
    category : {
        getAll : environment.api.url.category.concat("/category/get/all")
    },
    product : {
        getAll : environment.api.url.category.concat("/product/get/all")
    }
};