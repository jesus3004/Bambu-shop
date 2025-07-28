import { Component, Input } from '@angular/core';
import { CartService } from '../../../core/cart.service';
import { CartItem } from '../../../models/cart-item.model';

@Component({
    selector: 'app-product-car',
    standalone: false,
    templateUrl: './product-car.component.html',
    styleUrl: './product-car.component.scss',
})
export class ProductCarComponent {
    @Input() product: CartItem | undefined;
    value: number = 1;

    incemento(valor_1: number, valor_2: number) {
        let respuesta: String = 'Bajó';
        if (valor_1 < valor_2) {
            respuesta = 'Subió';
        }
        return respuesta;
    }

    descuento(precio_inicial: number, precio_final: number) {
        let descuento_porcentaje: number = 0;
        descuento_porcentaje = ((precio_inicial - precio_final) / precio_inicial) * 100;
        if (descuento_porcentaje < 0) {
            descuento_porcentaje = descuento_porcentaje * -1;
        }
        return descuento_porcentaje;
    }

    constructor(private cartService: CartService) {}

    updateQuantity(newValue: number) {
        if (this.product && newValue > 0) {
            this.cartService.updateCartItem(this.product.id, newValue);
        }
    }
    eliminarDelCarrito() {
        if (this.product) {
            this.cartService.removeFromCart(this.product.id);
             
        }
    }
}
