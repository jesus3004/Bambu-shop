import { Injectable } from '@angular/core';
import { User } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product.model';

@Injectable({
    providedIn: 'root'
})
export class StateService {
    private authSubject = new BehaviorSubject<User | null>(null);
    private productsSubject = new BehaviorSubject<Product[]>([]);
    private cartSubject = new BehaviorSubject<CartItem[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    auth$ = this.authSubject.asObservable();
    products$ = this.productsSubject.asObservable();
    cart$ = this.cartSubject.asObservable();
    loading$ = this.loadingSubject.asObservable();

    setProducts(products: Product[]) {
        this.productsSubject.next(products);
    }
    setCart(cart: CartItem[]) {
        this.cartSubject.next(cart);
    }
    setLoading(loading: boolean) {
        this.loadingSubject.next(loading);
    }

    addToCart(product: Product) {
        const cart = this.cartSubject.value.slice(); // Copia del carrito actual

        // Buscar si ya existe el producto
        const idx = cart.findIndex((p) => p.id === product.id);

        if (idx > -1) {
            // Si existe, aumenta la cantidad
            // Asegúrate que tu Product tiene 'quantity'
            cart[idx] = { ...cart[idx], quantity: (cart[idx].quantity ?? 1) + 1 };
        } else {
            // Si no existe, lo agrega con cantidad 1
            cart.push({ ...product, quantity: 1 });
        }
        this.cartSubject.next(cart);
    }

    /** Quita una unidad del producto (o elimina si es la última) */
    removeFromCart(productId: number) {
        let cart = this.cartSubject.value.slice();
        const idx = cart.findIndex((p) => p.id === productId);

        if (idx > -1) {
            if ((cart[idx].quantity ?? 1) > 1) {
                cart[idx] = { ...cart[idx], quantity: cart[idx].quantity - 1 };
            } else {
                // Si solo hay una, elimina el producto del carrito
                cart.splice(idx, 1);
            }
            this.cartSubject.next(cart);
        }
    }

    /** Elimina un producto del carrito (independientemente de la cantidad) */
    deleteFromCart(productId: number) {
        let cart = this.cartSubject.value.slice();
        cart = cart.filter((p) => p.id !== productId);
        this.cartSubject.next(cart);
    }

    /** Limpia el carrito completo */
    clearCart() {
        this.cartSubject.next([]);
    }

    /* Usuarios */
    setUser(user: User | null) {
        this.authSubject.next(user);
    }

    updateUserData(data: Partial<User>) {
        const current = this.authSubject.value;
        if (current) {
            this.authSubject.next({ ...current, ...data });
        }
    }

    private wishlistSubject = new BehaviorSubject<CartItem[]>([]);
    wishlist$ = this.wishlistSubject.asObservable();

    setWishlist(wishlist: CartItem[]) {
        this.wishlistSubject.next(wishlist);
    }

    clearWishlist() {
        this.wishlistSubject.next([]);
    }
}
