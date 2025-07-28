import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, doc, setDoc, deleteDoc, getDoc } from '@angular/fire/firestore';
import { switchMap, take } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Product } from '../models/product.model';
import { StateService } from './state.service';
import { CartItem } from '../models/cart-item.model';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    constructor(
        private firestore: Firestore,
        private authService: AuthService,
        private state: StateService
    ) {}

    loadCart() {
        this.authService.user$.pipe(switchMap((user) => (user ? collectionData(collection(this.firestore, `carts/${user.uid}/items`), { idField: 'id' }) : []))).subscribe((cart) => this.state.setCart(cart as CartItem[]));
    }

    addToCart(product: Product, quantity: number) {
        this.authService.user$.pipe(take(1)).subscribe((user) => {
            if (user) {
                const ref = doc(this.firestore, `carts/${user.uid}/items/${product.id}`);
                getDoc(ref).then((snapshot) => {
                    const currentQuantity = snapshot.exists() ? (snapshot.data()?.['quantity'] ?? 0) : 0;
                    let newQuantity = currentQuantity + quantity;

                    // 🔒 Limitar al stock máximo
                    if (newQuantity > product.stock) {
                        newQuantity = product.stock;
                    }

                    setDoc(ref, { ...product, quantity: newQuantity }, { merge: true });
                });
            }
        });
    }

    updateCartItem(productId: number, quantity: number) {
        this.authService.user$.pipe(take(1)).subscribe((user) => {
            if (user) {
                const ref = doc(this.firestore, `carts/${user.uid}/items/${productId}`);
                setDoc(ref, { quantity }, { merge: true });
            }
        });
    }

    removeFromCart(productId: number) {
        this.authService.user$.pipe(take(1)).subscribe((user) => {
            if (user) {
                const ref = doc(this.firestore, `carts/${user.uid}/items/${productId}`);
                deleteDoc(ref);
            }
        });
    }
}
