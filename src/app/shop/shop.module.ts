import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ShopRouting } from "./shop-routing.module";
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

/* Primeng */
import { CarouselModule } from "primeng/carousel";
import { LoaderComponent } from "@/shared/components/loader/loader.component";
import { CoreModule } from "../core/core.module";
import { ProductCartComponent } from "../shared/components/product-cart/product-cart.component";
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import {ButtonModule} from 'primeng/button';
import {InputNumberModule} from 'primeng/inputnumber';
import {RippleModule} from 'primeng/ripple';
import {TabsModule} from 'primeng/tabs';
import { RatingModule } from 'primeng/rating';
import { Fluid } from 'primeng/fluid';
import { PaginatorModule } from 'primeng/paginator';
import { SharedModule } from "../shared/shared.module";
import { WishComponent } from './wish/wish.component';
import { TableModule } from 'primeng/table';
import { AccordionModule } from 'primeng/accordion';
import { DividerModule } from 'primeng/divider';


@NgModule({
    declarations: [
    HomeComponent,
    ProductsComponent,
    CartComponent,
    ProductDetailComponent,
    WishComponent
  ],
    imports: [
    CommonModule,
    FormsModule,
    ShopRouting,
    CarouselModule,
    LoaderComponent,
    CoreModule,
    ButtonModule,
    InputNumberModule,
    RippleModule,
    TabsModule,
    RatingModule,
    SharedModule,
    PaginatorModule,
    Fluid,
    TableModule,
    AccordionModule,
    DividerModule
    
]
})
export class ShopModule {}
