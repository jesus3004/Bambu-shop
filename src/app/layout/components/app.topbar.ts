import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterModule } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { LayoutService } from '@/layout/service/layout.service';
import { AppBreadcrumb } from './app.breadcrumb';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { AvatarModule } from 'primeng/avatar';
import { SharedModule } from '@/shared/shared.module';
import { Observable, filter } from 'rxjs';
import { StateService } from '../../core/state.service';
import { DrawerModule } from 'primeng/drawer';
import { Product } from '../../models/product.model';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { AuthService } from '../../auth/auth.service';
import { CartService } from '../../core/cart.service';
import { WishListService } from '../../core/wish-list.service';
import { UserService } from '../../core/user.service';
import { CartItem } from '../../models/cart-item.model';

@Component({
    selector: 'app-topbar',
    standalone: true,
    imports: [RouterModule, CommonModule, StyleClassModule, InputTextModule, ButtonModule, IconFieldModule, InputIconModule, AvatarModule, SharedModule, DrawerModule, TieredMenuModule, RouterLink],
    template: `
        <div class="hidden lg:flex">
            <div class="flex items-center gap-8 md:px-1 lg:px-5">
                <ng-container *ngIf="!(authService.user$ | async); else userLogged">
                    <!-- Iniciar sesión -->
                    <div class="flex flex-row items-center gap-1 text-gray-500 hover:text-emerald-500 transition-all duration-300 cursor-pointer" [routerLink]="['/auth/login']">
                        <div class="flex flex-col text-2xl text-center mr-2">
                            <i class="pi pi-user scale-150"></i>
                        </div>
                        <div class="flex flex-col">
                            <span class="text-xs">Account</span>
                            <span class="font-semibold text-gray-500 text-sm">Iniciar sesión</span>
                        </div>
                    </div>

                    <!-- Registrarse -->
                    <div class="flex flex-row items-center gap-1 text-gray-500 hover:text-emerald-500 transition-all duration-300 cursor-pointer" [routerLink]="['/auth/register']">
                        <div class="flex flex-col text-2xl text-center mr-2">
                            <i class="pi pi-user-plus scale-150"></i>
                        </div>
                        <div class="flex flex-col">
                            <span class="text-xs">Account</span>
                            <span class="font-semibold text-gray-500 text-sm">Registrarse</span>
                        </div>
                    </div>
                </ng-container>

                <!-- Mostrar solo si el usuario está autenticado -->
                <ng-template #userLogged>
                    <!-- Perfil (solo primer nombre) -->
                    <div class="flex flex-row items-center gap-1 text-gray-500 hover:text-emerald-500 transition-all duration-300 cursor-pointer">
                        <div class="flex flex-col text-2xl text-center mr-2">
                            <i class="pi pi-user scale-150"></i>
                        </div>
                        <div class="flex flex-col">
                            <span class="text-xs">Benvenido</span>
                            <span class="font-semibold text-gray-500 text-sm">
                                {{ userName }}
                            </span>
                        </div>
                    </div>
                    <!-- Wishlist -->
                    <div class="flex flex-row items-center gap-1 text-gray-500 hover:text-emerald-500 transition-all duration-300 cursor-pointer" [routerLink]="['/Bambu-shop/wish']">
                        <div class="flex flex-col text-2xl text-center mr-2">
                            <i class="pi pi-heart scale-150"></i>
                        </div>
                        <div class="flex flex-col">
                            <span class="text-xs">Wishlist</span>
                            <span class="font-semibold text-gray-500 text-sm" *ngIf="(state.wishlist$ | async)?.length as count">{{ count }}-ITEMS</span>
                        </div>
                    </div>

                    <!-- Cart -->
                    <div class="flex flex-row items-center gap-1 text-gray-500 hover:text-emerald-500 transition-all duration-300 cursor-pointer" (click)="carrito_draw = true">
                        <div class="flex flex-col text-2xl text-center mr-2">
                            <i class="pi pi-shopping-cart scale-150"></i>
                        </div>
                        <div class="flex flex-col">
                            <span class="text-xs">Cart</span>
                            <span class="font-semibold text-gray-500 text-sm" *ngIf="(state.cart$ | async)?.length as count">{{ count }}-ITEMS</span>
                        </div>
                    </div>

                    

                    <div class="flex flex-row items-center gap-1 text-gray-500 hover:text-red-600 transition-all duration-300 cursor-pointer" (click)="logout()" title="Cerrar sesión">
                        <div class="flex flex-col text-2xl text-center mr-2">
                            <i class="pi pi-sign-out scale-150"></i>
                        </div>
                        <div class="flex flex-col">
                            <span class="text-xs">Salir</span>
                            <span class="font-semibold text-gray-500 text-sm">Cerrar sesión</span>
                        </div>
                    </div>
                </ng-template>
            </div>
        </div>

        <div class="flex lg:hidden">
            <div class="flex-1 flex justify-center">
                <div class="flex items-center gap-2">
                    <img src="img/Logo-mini.png" width="30" alt="Logo-bambu" />
                    <span class="text-2xl font-bold tracking-tight"> Bambo<span class="text-green-600"> Shop</span> </span>
                </div>
            </div>
            <!-- Acciones: usuario, wishlist, carrito -->
            <div class="flex items-center gap-4">
                <ng-container *ngIf="!(authService.user$ | async); else loggedIn">
                    <div class="relative cursor-pointer" [routerLink]="['/auth/login']">
                        <i class="pi pi-user text-2xl"></i>
                    </div>
                    <div class="relative cursor-pointer" [routerLink]="['/auth/register']">
                        <i class="pi pi-user-plus text-2xl"></i>
                    </div>
                </ng-container>

                <!-- Iconos cuando SÍ está logueado -->
                <ng-template #loggedIn>
                    <div class="relative" [routerLink]="['/Bambu-shop/wish']">
                        <i class="pi pi-heart text-2xl"></i>
                        <span *ngIf="(state.wishlist$ | async)?.length" class="absolute -top-1 -right-2 bg-gray-900 text-white text-xs scale-90 rounded-full w-4 h-4 flex items-center justify-center">
                            {{ (state.wishlist$ | async)?.length }}
                        </span>
                    </div>

                    <div class="relative cursor-pointer" (click)="carrito_draw = true">
                        <i class="pi pi-shopping-cart text-2xl"></i>
                        <span *ngIf="(state.cart$ | async)?.length" class="absolute -top-1 -right-2 bg-gray-900 text-white text-xs scale-90 rounded-full w-4 h-4 flex items-center justify-center">
                            {{ (state.cart$ | async)?.length }}
                        </span>
                    </div>

                    <div class="relative cursor-pointer" (click)="logout()" title="Cerrar sesión">
                        <i class="pi pi-sign-out text-2xl"></i>
                    </div>
                </ng-template>
            </div>
        </div>
        <p-drawer [(visible)]="carrito_draw" position="right" styleClass="!w-[350px] !max-[480px]:!w-[300px] !pt-[15px] !px-[20px] !text-[14px] !bg-[#fff]">
            <ng-template #headless>
                <div class="flex flex-col h-full ">
                    <div class="gi-cart-title w-full flex flex-wrap justify-between">
                        <span class="cart_title text-[15px] text-[#4b5966] font-Poppins font-semibold mb-[20px]">Carrito de compras</span>
                        <span class="gi-cart-close relative border-[0] text-[30px] leading-[20px] text-[#4b5966]">
                            <p-button type="button" (click)="carrito_draw = false" icon="pi pi-times" rounded="true" outlined="true" styleClass="h-8 w-8"></p-button>
                        </span>
                    </div>
                    <div class="flex-1 px-4 overflow-y-auto h-full">
                        <ng-container *ngIf="products | async as items">
                            <div *ngIf="items.length > 0; else emptyCart">
                                <app-product-car *ngFor="let product of items" [product]="product"></app-product-car>
                            </div>
                            <ng-template #emptyCart>
                                <div class="flex flex-col items-center justify-center h-full  text-center">
                                    <i class="pi pi-shopping-cart text-6xl mb-4 text-green-500" style="font-size: 3.75em;"></i>
                                    <p class="text-xl font-semibold text-gray-500">Tu carrito está vacío</p>
                                </div>
                            </ng-template>
                        </ng-container>
                    </div>

                    <div class="mt-auto">
                        <app-total-cart (closeDrawer)="carrito_draw = false"></app-total-cart>
                    </div>
                </div>
            </ng-template>
        </p-drawer>
    `
})
export class AppTopbar {
    carrito_draw: boolean = false;
    products: Observable<CartItem[]>;
    userName: string = '';
    constructor(
        public layoutService: LayoutService,
        public renderer: Renderer2,
        public router: Router,
        public state: StateService,
        public authService: AuthService,
        private cartService: CartService,
        private wishlistService: WishListService,
        private userService: UserService
    ) {
        this.products = this.state.cart$;
        this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {});
        this.authService.user$.subscribe((user) => {
            if (user) {
                this.userService.getCurrentUserProfile().subscribe((profile) => {
                    this.userName = profile?.name || '';
                });
            }
        });
    }

    ngOnInit() {
        this.cartService.loadCart();
        this.wishlistService.loadWishlist();
    }

    logout() {
        this.state.setLoading(true);
        this.authService.logout().then(() => {
            setTimeout(() => {
                this.state.clearCart();
                this.state.clearWishlist();
                this.state.setUser(null);
                this.state.setLoading(false);
                this.carrito_draw = false;
                this.router.navigate(['/']);
            }, 1500);
        });
    }
}
