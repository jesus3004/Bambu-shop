import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { Observable } from 'rxjs';
import { StateService } from '../../core/state.service';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { WishListService } from '../../core/wish-list.service';
import { CartService } from '../../core/cart.service';
import { CartItem } from '../../models/cart-item.model';

@Component({
    selector: 'app-product-detail',
    standalone: false,
    templateUrl: './product-detail.component.html',
    styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
    id_product: string = '';
    product: Product = {
        id: 0,
        title: '',
        description: '',
        price: 0,
        discountPercentage: 0,
        rating: 0,
        stock: 0,
        brand: '',
        category: '',
        sku: '',
        minimumOrderQuantity: 0,
        availabilityStatus: '',
        returnPolicy: '',
        warrantyInformation: '',
        shippingInformation: '',
        weight: 0,
        dimensions: {
            width: 0,
            height: 0,
            depth: 0
        },
        images: [],
        thumbnail: '',
        tags: [],
        meta: {
            createdAt: '',
            updatedAt: '',
            barcode: '',
            qrCode: ''
        },
        reviews: []
    };
    lis_product!: Observable<Product[]>;
    currentCart!: Observable<CartItem[]>;
    valor_items: number = 0;
    selectedImageIndex: number = 0;
    fromPage: string = '';
    quantity: number = 1;

    constructor(
        private state: StateService,
        private productService: ProductService,
        private rote: ActivatedRoute,
        private router: Router,
        private wishlistService: WishListService,
        private authService: AuthService,
        private cartService: CartService
    ) {
        this.rote.queryParams.subscribe((params) => {
            this.fromPage = params['from'] || 'Bambu-shop';
        });
        this.rote.params.subscribe((params) => {
            this.id_product = params['uuid'];

            this.lis_product = this.state.products$;
            this.currentCart = this.state.cart$;
            this.lis_product.subscribe((products) => {
                const found = this.getProductById(this.id_product, products);
                if (found) {
                    this.product = found;
                    this.valor_items = 1;
                } else {
                    console.warn('Producto no encontrado');
                }
            });

            this.state.products$.subscribe((products) => {
                if (!products || products.length === 0) {
                    this.productService.fetchProducts().subscribe();
                }
            });

            this.state.wishlist$.subscribe((wishlist) => {
                this.wishlistIds = wishlist.map((p) => Number(p.id));
            });
        });
    }

    ngOnInit(): void {}

    getProductById(id: string, products: Product[]): Product | undefined {
        const numericId = Number(id);
        return products.find((p) => p.id === numericId);
    }

    descuento(precio_inicial: number, porcentaje_descuento: number): number {
        const descuento = (precio_inicial * porcentaje_descuento) / 100;
        const precio_final = precio_inicial - descuento;
        return precio_final;
    }

    wishlistIds: number[] = [];

    isInWishlist(): boolean {
        return !!this.product && this.wishlistIds.includes(this.product.id);
    }

    addFavorite(producto: Product) {
        this.authService.user$.subscribe((user) => {
            if (!user) {
                this.router.navigate(['/auth/login']);
                return;
            }

            const exists = this.wishlistIds.includes(producto.id);
            if (exists) {
                this.wishlistService.removeFromWishlist(producto.id);
            } else {
                this.wishlistService.addToWishlist(producto);
            }
        });
    }

    addToCart() {
        this.authService.user$.subscribe((user) => {
            if (!user) {
                this.router.navigate(['/auth/login']);
                return;
            }

            this.currentCart.subscribe((cart) => {
                const existing = cart.find((item) => item.id === this.product.id);
                const currentQuantity = existing?.quantity ?? 0;
                const totalQuantity = currentQuantity + this.valor_items;

                if (totalQuantity > this.product.stock) {
                    const available = this.product.stock - currentQuantity;
                    alert(`Solo puedes agregar ${available > 0 ? available : 0} unidad(es) más de este producto.`);
                    return;
                }

                this.cartService.addToCart(this.product, this.valor_items);
            });
        });
    }
}
