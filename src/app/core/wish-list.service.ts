import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, doc, setDoc, deleteDoc } from '@angular/fire/firestore';
import { switchMap, take } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Product } from '../models/product.model';
import { StateService } from './state.service';
import { CartItem } from '../models/cart-item.model';


@Injectable({
  providedIn: 'root'
})
export class WishListService {

  
  constructor(
    private firestore: Firestore,
    private authService: AuthService,
    private state: StateService
  ) {}

  loadWishlist() {
    this.authService.user$.pipe(
      switchMap(user =>
        user
          ? collectionData(collection(this.firestore, `wishlists/${user.uid}/items`), { idField: 'id' })
          : []
      )
    ).subscribe(wishlist => this.state.setWishlist(wishlist as CartItem[]));
  }

  addToWishlist(product: Product) {
  this.authService.user$.pipe(take(1)).subscribe(user => {
    if (user) {
      const ref = doc(this.firestore, `wishlists/${user.uid}/items/${product.id}`);
      setDoc(ref, product, { merge: true }).then(() => {
        this.loadWishlist(); // 🔄 vuelve a cargar después de guardar
      });
    }
  });
}

  removeFromWishlist(productId: number) {
  this.authService.user$.pipe(take(1)).subscribe(user => {
    if (user) {
      const ref = doc(this.firestore, `wishlists/${user.uid}/items/${productId}`);
      deleteDoc(ref).then(() => {
        this.loadWishlist(); // 🔄 vuelve a cargar después de eliminar
      });
    }
  });
}
}
