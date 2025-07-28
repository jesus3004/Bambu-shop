import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CartComponent } from "./cart/cart.component";
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { WishComponent } from "./wish/wish.component";
import { AuthGuard } from "../auth/auth.guard";

@NgModule({
    imports: [RouterModule.forChild([
      { path: '', component: HomeComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'products-detail/:uuid',  component: ProductDetailComponent },
      { path: 'cart',  component: CartComponent, canActivate: [AuthGuard] },
      { path: 'wish',  component: WishComponent, canActivate: [AuthGuard] }
    ])],
    exports: [RouterModule]
})
export class ShopRouting { }