import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StateService } from '../../core/state.service';
import { WishListService } from '../../core/wish-list.service';
import { CartItem } from '../../models/cart-item.model';
import { AuthService } from '../../auth/auth.service';

@Component({
    selector: 'app-wish',
    standalone: false,
    templateUrl: './wish.component.html',
    styleUrl: './wish.component.scss'
})
export class WishComponent {
    wishlist$: Observable<CartItem[]>;

    constructor(
        private state: StateService,
        private wishListService: WishListService,
        private router: Router,
        private authService: AuthService
    ) {
        this.wishlist$ = this.state.wishlist$;
    }
    wishlistArray: CartItem[] = [];
    ngOnInit(): void {
        this.wishlist$ = this.state.wishlist$;
        this.wishListService.loadWishlist();

        this.wishlist$.subscribe((wishlist) => {
            this.wishlistArray = wishlist;
        });
    }

    verProducto(productId: number) {
        this.router.navigate(['/Bambu-shop/products-detail', productId], {
            queryParams: { from: 'wishlist' }
        });
    }

    eliminar(productId: number) {
        this.wishListService.removeFromWishlist(productId);
    }

    addFavorite(producto: CartItem) {
        this.authService.user$.subscribe((user) => {
            if (!user) {
                this.router.navigate(['/auth/login']);
                return;
            }

            const exists = this.wishlistArray.some(p => p.id === producto.id);
            if (exists) {
                this.wishListService.removeFromWishlist(producto.id);
            } else {
                this.wishListService.addToWishlist(producto);
            }
        });
    }

    page: number = 0;

    rows: number = 20;

    onPageChange(event: any) {
        this.page = Math.floor((event.first ?? 0) / (event.rows ?? this.rows));
        this.rows = event.rows ?? this.rows;
    }

    get paginatedProducts() {
        const start = this.page * this.rows;
        return this.wishlistArray.slice(start, start + this.rows);
    }
}
