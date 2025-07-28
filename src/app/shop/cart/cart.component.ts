import { Component } from '@angular/core';
import { CartService } from '../../core/cart.service';
import { StateService } from '../../core/state.service';
import { CartItem } from '../../models/cart-item.model';
import { Product } from '../../models/product.model';
import { ProductService } from '../product.service';

@Component({
    selector: 'app-cart',
    standalone: false,
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.scss'
})
export class CartComponent {
    constructor(
        public state: StateService,
        private cartService: CartService,
        private productService: ProductService
    ) {}

    mostrarEnvio = true;
    cartItems: CartItem[] = [];
    subtotal = 0;
    shippingCost = 80;
    descuento = 0;
    iva: number = 0;
    total = 0;

    ngOnInit(): void {
        this.state.cart$.subscribe((cart) => {
            this.cartItems = cart;
            this.calcularTotales();
        });

        this.state.cart$.subscribe((cart) => {
            this.cartItems = cart;
            this.calcularTotales();

            const categorias = [...new Set(cart.map((item) => item.category))];
            if (categorias.length > 0) {
                this.productService.fetchProducts().subscribe((productos) => {
                    this.recommendedProducts = productos.filter((p) => categorias.includes(p.category) && !cart.find((ci) => ci.id === p.id)).slice(0, 10); 
                });
            }
        });
    }

    calcularTotales() {
        this.subtotal = this.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        let descont = this.cartItems.reduce((acc, item) => acc + item.discountPercentage * item.quantity, 0);
        this.descuento = this.subtotal - descont;
        this.iva = this.subtotal * 0.16;
        this.total = this.subtotal + this.iva + this.shippingCost - this.descuento;
    }

    actualizarCantidad(item: CartItem, cantidad: number) {
        this.cartService.updateCartItem(item.id, cantidad);
        if (cantidad > 0) {
        }
    }

    eliminarItem(id: number) {
        this.cartService.removeFromCart(id);
    }

    aplicarCupon() {
        this.descuento = 50; // Simulación
        this.calcularTotales();
    }

    recommendedProducts: Product[] = [];
    responsiveOptions = [
        {
            breakpoint: '1200px', // Tablets grandes
            numVisible: 4,
            numScroll: 1
        },
        {
            breakpoint: '1024px', // Tablets medianas
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];
}
