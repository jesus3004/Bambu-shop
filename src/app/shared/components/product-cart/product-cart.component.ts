import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Product } from '../../../models/product.model';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { OneDecimalPipe } from '../../pipes/one-decimal.pipe';
import { NoneDecimalPipe } from '../../pipes/none-decimal.pipe';
import { NgClass, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { StateService } from '../../../core/state.service';
import { WishListService } from '../../../core/wish-list.service';
import { AuthService } from '../../../auth/auth.service';


@Component({
  selector: 'app-product-cart',
  standalone: false,
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.scss'
})
export class ProductCartComponent {
  @Input() product: Product | undefined;
  @Input() fromURL: string | undefined;
  
  hovered = false;
  wishlistIds: number[] = [];

  constructor(
    private router: Router,
    private wishlistService: WishListService,
    private state: StateService,
    private authService:AuthService
  ) {
    this.state.wishlist$.subscribe(wishlist => {
       this.wishlistIds = wishlist.map(p => Number(p.id));
    });
  }

  descuento(precio_inicial: number, porcentaje_descuento: number): number {
    const descuento = (precio_inicial * porcentaje_descuento) / 100;
    return precio_inicial - descuento;
  }

  isInWishlist(): boolean {
  return !!this.product && this.wishlistIds.includes(this.product.id);
}

  addFavorite(producto: Product) {
    this.authService.user$.subscribe(user => {
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

}
