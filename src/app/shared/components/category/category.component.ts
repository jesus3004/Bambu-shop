import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '../../../models/category';
import { ProductService } from '../../../shop/product.service';
import { StateService } from '../../../core/state.service';

@Component({
  selector: 'app-category',
  standalone:false,
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  @Input() category!: Category;
  @Output() categorySelected = new EventEmitter<string>();
  @Input() active: boolean = false;

  productCount: number = 0;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    if (this.category?.slug) {
      if(this.category.slug!=="all"){
        this.productService.getProductCountByCategory(this.category.slug).subscribe(count => {
          this.productCount = count;
        });
      }else{
        this.productService.getProductCountAll().subscribe(count => {
          this.productCount = count;
        });
      }
    }
  }

  onClick(): void {
    this.categorySelected.emit(this.category.slug);
  }
}
