import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { dataInterceptorProvider } from './interceptor/data.interceptor';
import { CategoryListingComponent } from './component/category-listing/category-listing.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductListingComponent } from './component/product-listing/product-listing.component';
import { ProductCardComponent } from './component/product-card/product-card.component';
import { ShoppingComponent } from './component/shopping/shopping.component';
import { ProductPurchaseComponent } from './component/product-purchase/product-purchase.component';
import { ProductPurchaseListComponent } from './component/product-purchase-list/product-purchase-list.component';
import { PosProductComponent } from './component/pos.product.component';
import { PosComponent } from './component/pos.component';
import { PosProductListComponent } from './component/pos.product.list.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryListingComponent,
    ProductListingComponent,
    ProductCardComponent,
    ShoppingComponent,
    ProductPurchaseComponent,
    ProductPurchaseListComponent,
    PosProductComponent,
    PosComponent,
    PosProductListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    dataInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
