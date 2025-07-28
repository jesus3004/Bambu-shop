import { Component } from '@angular/core';
import { StateService } from '../../core/state.service';
import { Product } from '../../models/product.model';
import { ProductService } from '../product.service';
import { Subject, take, takeUntil } from 'rxjs';
import { Category } from '../../models/category';

@Component({
    selector: 'app-home',
    standalone: false,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
    page: number = 0;

    rows: number = 20;

    onPageChange(event: any) {
        this.page = Math.floor((event.first ?? 0) / (event.rows ?? this.rows));
        this.rows = event.rows ?? this.rows;
    }

    get paginatedProducts() {
        const start = this.page * this.rows;
        return this.products.slice(start, start + this.rows);
    }

    products: Product[] = [];
    categories: Category[] = [];
    private destroy$ = new Subject<void>();

    constructor(
        private state: StateService,
        private productService: ProductService
    ) {}

    ngOnInit() {
        this.state.products$.pipe(take(1)).subscribe((products) => {
            if (products.length === 0) {
                this.productService.fetchProducts().subscribe();
            }
        });

        this.state.products$.pipe(takeUntil(this.destroy$)).subscribe((prods) => {
            this.products = prods;
        });

        this.productService.fetchFullCategories().subscribe((data) => {
            const allCategory: Category = {
                slug: 'all',
                name: 'All',
                url: ''
            };

            this.categories = [allCategory, ...data];
        });

        setTimeout(() => {
            this.state.setLoading(false)
        }, 2000);
    }

    recarga() {
        this.state.setLoading(true);
        setTimeout(() => {
            this.state.setLoading(false);
        }, 3500);
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }

    selectedCategorySlug: string = 'all';
    onCategorySelected(slug: string): void {
        this.selectedCategorySlug = slug;

        if (slug === 'all') {
            this.productService.fetchProducts().subscribe((products) => {});
        } else {
            this.productService.searchProductsByCategory(slug).subscribe((products) => {});
        }
    }
    responsiveOptions = [
        {
            breakpoint: '1200px',
            numVisible: 4,
            numScroll: 1
        },
        {
            breakpoint: '1024px',
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
