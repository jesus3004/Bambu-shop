import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { Fluid } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToastModule } from 'primeng/toast';

import { NoneDecimalPipe } from "./pipes/none-decimal.pipe";
import { OneDecimalPipe } from "./pipes/one-decimal.pipe";
import { ShortDatePipe } from "./pipes/short-date.pipe";
import { TwoDecimalPipe } from "./pipes/two-decimal.pipe";

import { Router, RouterLink } from '@angular/router';
import { ProductCarComponent } from "./components/product-car/product-car.component";
import { ProductCartComponent } from "./components/product-cart/product-cart.component";
import { SherchComponent } from "./components/sherch/sherch.component";
import { TotalCartComponent } from "./components/total-cart/total-cart.component";
import { CategoryComponent } from "./components/category/category.component";
import { LangSwitcherComponent } from "./components/lang-switcher/lang-switcher.component";
import { TranslateModule } from '@ngx-translate/core';
import { LangSwitcherMobileComponent } from './components/lang-switcher-mobile/lang-switcher-mobile.component';
@NgModule({
    declarations: [
        ProductCartComponent,
        ProductCarComponent,
        SherchComponent,
        TotalCartComponent,
        CategoryComponent,
        LangSwitcherComponent,
        LangSwitcherMobileComponent
    ],
    imports: [
        ShortDatePipe,
        NoneDecimalPipe,
        OneDecimalPipe,
        ButtonModule,
        RatingModule,
        RouterLink,
        InputNumberModule,
        Fluid,
        CommonModule,
        FormsModule,
        TwoDecimalPipe,
        InputTextModule,
        InputGroupModule,
        InputGroupAddonModule,
        TranslateModule,
    ],
    exports:[
        ProductCarComponent,
        ProductCartComponent,
        ShortDatePipe,
        NoneDecimalPipe,
        OneDecimalPipe,
        TwoDecimalPipe,
        SherchComponent,
        TotalCartComponent,
        CategoryComponent,
        LangSwitcherComponent,
        LangSwitcherMobileComponent

    ]
})
export class SharedModule {}
