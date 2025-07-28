import { Component, EventEmitter, Output } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { Observable, filter } from 'rxjs';
import { CartService } from '../../../core/cart.service';
import { WishListService } from '../../../core/wish-list.service';
import { Product } from '../../../models/product.model';
import { StateService } from '../../../core/state.service';
import { CartItem } from '../../../models/cart-item.model';

@Component({
  selector: 'app-total-cart',
  standalone:false,
  templateUrl: './total-cart.component.html',
  styleUrl: './total-cart.component.scss'
})
export class TotalCartComponent {
  @Output() closeDrawer = new EventEmitter<void>();
cart$: Observable<CartItem[]>;

  constructor(private state: StateService) {
      this.cart$ = this.state.cart$;
  }

  getSubtotal(cart: CartItem[]): number {
    return cart.reduce((acc, item) => acc + item.discountPercentage * (item.quantity ?? 1), 0);
  }

  getVAT(subtotal: number): number {
    return subtotal * 0.16;
  }

  getTotal(subtotal: number, vat: number): number {
    return subtotal + vat;
  }
}
