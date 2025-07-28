import { Component } from '@angular/core';
import { ProductService } from '../../../shop/product.service';
import { StateService } from '../../../core/state.service';
import { firstValueFrom } from 'rxjs';
@Component({
    selector: 'app-sherch',
    standalone: false,
    template: `
        <p-inputgroup styleClass="w-full">
            <input pInputText placeholder="{{'search.placeholder'|translate}}" [(ngModel)]="searchTerm" (keydown.enter)="onSearch()"/>
            <p-inputgroup-addon>
                <p-button icon="pi pi-search" severity="secondary"   variant="text" (click)="onSearch()" />
            </p-inputgroup-addon>
        </p-inputgroup>
    `
})
export class SherchComponent {

  searchTerm: string = '';

  constructor(private productService: ProductService, private state:StateService) {}

  async onSearch() {
  this.state.setLoading(true);

  try {
    if (this.searchTerm.trim()) {
      await firstValueFrom(this.productService.searchProducts(this.searchTerm));
    } else {
      await firstValueFrom(this.productService.fetchProducts());
    }
  } finally {
    setTimeout(() => {
      this.state.setLoading(false);
    }, 1500);
  }
}
}
