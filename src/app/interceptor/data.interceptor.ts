import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ApiUrl } from "../api/api.url";
import { delay } from "rxjs/operators";
import categories from "../../assets/mock/categories.json";
import products from "../../assets/mock/products.json";

/**
 * @author : Dongmo Feudjio
 * 
 * @description
 * angular interceptor to mock api call response
 *
 * **/
@Injectable()
export class DataInterceptor  implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.handle(request,next).pipe(delay(2000));
    }

    handle(request: HttpRequest<any>,next: HttpHandler) : Observable<HttpEvent<any>> {
        switch (true) {
            case request.url.endsWith(ApiUrl.category.getAll)  :
                return  this.ok(categories);
            case request.url.endsWith(ApiUrl.product.getAll)  :
                return  this.ok(products);
            default:
                return next.handle(request);
        }
    }

    ok(body?) : Observable<HttpEvent<any>> {
        return of(new HttpResponse({ status: 200, body : body }));
    }
    
}

export const dataInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: DataInterceptor,
    multi: true,
};

