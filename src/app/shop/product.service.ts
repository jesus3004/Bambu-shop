import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap, catchError, of } from 'rxjs';
import { StateService } from '../core/state.service';
import { Product } from '../models/product.model';
import { Category } from '../models/category';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private readonly API_BASE = 'https://dummyjson.com/products';

    constructor(
        private http: HttpClient,
        private state: StateService
    ) {}

    /** Trae todos los productos (hasta 100) */
    fetchProducts(): Observable<Product[]> {
        const url = `${this.API_BASE}?limit=0`;

        return this.http.get<{ products: Product[] }>(url).pipe(
            map((res) => res.products.map((p) => ({ ...p, favorite: false }))),
            tap((products) => this.state.setProducts(products)),
            catchError(() => of([]))
        );
    }

    /** Busca productos por nombre o categoría */
    searchProducts(query: string): Observable<Product[]> {
        if (!query.trim()) return of([]);

        const url = `${this.API_BASE}/search?q=${encodeURIComponent(query)}`;

        return this.http.get<{ products: Product[] }>(url).pipe(
            map((res) => res.products.map((p) => ({ ...p, favorite: false }))),
            tap((products) => this.state.setProducts(products)),
            catchError(() => of([]))
        );
    }

    fetchFullCategories(): Observable<Category[]> {
        const url = `${this.API_BASE}/categories`;

        return this.http.get<Category[]>(url).pipe(catchError(() => of([])));
    }

    /** Obtiene todas las categorías */
    fetchCategories(): Observable<string[]> {
        const url = `${this.API_BASE}/categories`;

        return this.http.get<string[]>(url).pipe(catchError(() => of([])));
    }

    searchProductsByCategory(category: string): Observable<Product[]> {
        const url = `${this.API_BASE}/category/${encodeURIComponent(category)}`;

        return this.http.get<{ products: Product[] }>(url).pipe(
            map((res) => res.products.map((p) => ({ ...p, favorite: false }))),
            tap((products) => this.state.setProducts(products)),
            catchError(() => of([]))
        );
    }

    getProductCountByCategory(category: string): Observable<number> {
        const url = `${this.API_BASE}/category/${encodeURIComponent(category)}`;

        return this.http.get<{ products: any[]; total: number }>(url).pipe(
            map((res) => res.total),
            catchError(() => of(0))
        );
    }

    getProductCountAll(): Observable<number> {
        const url = `${this.API_BASE}?limit=0`;

        return this.http.get<{ products: any[]; total: number }>(url).pipe(
            map((res) => res.total),
            catchError(() => of(0))
        );
    }
}
