import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from "@/shared/components/loader/loader.component";
import { AsyncPipe, NgIf } from '@angular/common';
import { StateService } from './app/core/state.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule, LoaderComponent, NgIf, AsyncPipe],
    template: `
    <app-loader class="z-10" *ngIf="loading$ | async"></app-loader>
    <router-outlet class="z-1"></router-outlet>
    `
})
export class AppComponent {
    loading$!: Observable<boolean>;

  constructor(public state: StateService) {
    this.loading$ = this.state.loading$;
  }

  ngOnInit(): void {
    // Mostrar el loader de la app (si deseas transición interna también)
    this.state.setLoading(true);

    // Simula carga inicial
    setTimeout(() => {
      this.state.setLoading(false);
      // Oculta el loader de index.html
      const loader = document.getElementById('global-loader');
      if (loader) loader.style.display = 'none';
    }, 1500);
  }

}
