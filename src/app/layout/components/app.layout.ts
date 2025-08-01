import { Component, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, Observable, Subscription } from 'rxjs';
import { AppTopbar } from './app.topbar';
import { LayoutService } from '@/layout/service/layout.service';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { MenuModule } from 'primeng/menu';
import { DropdownModule } from 'primeng/dropdown';
import { DrawerModule } from 'primeng/drawer';
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { MenuItem } from 'primeng/api';
import { Ripple } from 'primeng/ripple';
import { StyleClass } from 'primeng/styleclass';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { Product } from '../../models/product.model';
import { StateService } from '../../core/state.service';
import { ProductCarComponent } from '../../shared/components/product-car/product-car.component';
import { SharedModule } from '../../shared/shared.module';
import { AppMenu } from './app.menu';

@Component({
    selector: 'app-layout',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        ButtonModule,
        InputTextModule,
        InputGroupModule,
        InputGroupAddonModule,
        MenuModule,
        AutoCompleteModule,
        DropdownModule,
        DrawerModule,
        BadgeModule,
        RippleModule,
        AvatarModule,
        AppTopbar,
        AppMenu,
        TieredMenuModule,
        SharedModule
    ],
    template: `
        <div class="layout-container flex flex-col h-screen" [ngClass]="containerClass">
            <div class="hidden lg:block ">
                <div class="w-full flex items-center justify-between px-3 lg:px-8 py-4 bg-gray-50 shadow-sm">
                    <div class="flex items-center gap-2">
                        <img src="img/logo.png" class="cursor-pointer" alt="Logo" width="130" [routerLink]="['/']" />
                    </div>
                    <div class="flex-1 md:px-3 lg:px-11">
                        <app-sherch></app-sherch>
                    </div>
                     <div class="flex items-center">
                         <app-topbar> </app-topbar>
                     </div>
                </div>
            </div>

            <div class="block lg:hidden">
                <div class="w-full bg-gray-50 flex flex-col shadow">
                    <div class="flex items-center justify-between px-4 py-2 md:hidden">
                        <app-menu></app-menu>
                         <div class="w-full">
                             <app-topbar> </app-topbar>
                         </div>
                    
                    </div>
                    <div class="px-4 pb-4 pt-1 w-full md:hidden">
                        <div class="w-full flex items-center">
                           <app-sherch class="w-full"></app-sherch>
                        </div>
                    </div>
                </div>
            </div>

            
            <div class="flex-1 overflow-auto no-scrollbar px-3 md:px-24 pt-8">
                <router-outlet></router-outlet>
            </div>
        </div>
    `
})
export class AppLayout {
    items: MenuItem[] | undefined;
    items_login: MenuItem[] | undefined;
    menu_draw: boolean = false;

    
   

    @ViewChild(AppTopbar) appTopBar!: AppTopbar;

    constructor(
        public layoutService: LayoutService,
        public renderer: Renderer2,
        public router: Router,
        public state: StateService
    ) {
        
        

        this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
            
        });
    }

    get containerClass() {
        const layoutConfig = this.layoutService.layoutConfig();
        const layoutState = this.layoutService.layoutState();

        return {
            'layout-light': !layoutConfig.darkTheme,
            'layout-dark': layoutConfig.darkTheme,
            'layout-colorscheme-menu': layoutConfig.menuTheme === 'colorScheme',
            'layout-primarycolor-menu': layoutConfig.menuTheme === 'primaryColor',
            'layout-transparent-menu': layoutConfig.menuTheme === 'transparent',
            'layout-overlay': layoutConfig.menuMode === 'overlay',
            'layout-static': layoutConfig.menuMode === 'static',
            'layout-slim': layoutConfig.menuMode === 'slim',
            'layout-slim-plus': layoutConfig.menuMode === 'slim-plus',
            'layout-horizontal': layoutConfig.menuMode === 'horizontal',
            'layout-reveal': layoutConfig.menuMode === 'reveal',
            'layout-drawer': layoutConfig.menuMode === 'drawer',
            'layout-static-inactive': layoutState.staticMenuDesktopInactive && layoutConfig.menuMode === 'static',
            'layout-overlay-active': layoutState.overlayMenuActive,
            'layout-mobile-active': layoutState.staticMenuMobileActive,
            'layout-sidebar-active': layoutState.sidebarActive,
            'layout-sidebar-anchored': layoutState.anchored
        };
    }

    ngOnDestroy() {
       
    }
}
