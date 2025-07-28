import { AppConfigurator } from '@/layout/components/app.configurator';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { StateService } from '../../core/state.service';

@Component({
    selector: 'app-notfound',
    standalone: true,
    imports: [RouterModule, ButtonModule],
    template: `
        <svg viewBox="0 0 960 540" xmlns="http://www.w3.org/2000/svg" version="1.1" class="min-w-screen min-h-[100vw] fixed left-0 bottom-[-10rem] z-0 -rotate-90" preserveAspectRatio="none">
            <path
                d="M0 331L26.7 321C53.3 311 106.7 291 160 291C213.3 291 266.7 311 320 329.5C373.3 348 426.7 365 480 373.2C533.3 381.3 586.7 380.7 640 373.8C693.3 367 746.7 354 800 341.2C853.3 328.3 906.7 315.7 933.3 309.3L960 303L960 541L0 541Z"
                fill="var(--p-green-200)"
                stroke-linecap="round"
                stroke-linejoin="miter"
            ></path>
        </svg>
        <!-- Fondo SVG decorativo -->
        <div class="min-h-screen bg-green- flex flex-col items-center justify-center text-center px-4 relative">
            <!-- Logo arriba -->
            <img src="img/logo.png" alt="Logo Bambu" class="w-52 mb-6 absolute top-6 left-6 sm:left-10" />

            <!-- Imagen ilustrativa central -->
            <div class="relative w-full max-w-xl mb-8 rounded-full overflow-hidden bg-gradient-to-t from-green-500 to-emerald-50 p-12 shadow-lg ring-4 ring-green-300">
                <img src="img/error/asset-error.svg" alt="404 ilustración" class="w-full h-auto object-contain transition-transform duration-300 hover:scale-105" />
            </div>

            <!-- Título -->
            <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Esta página no existe</h1>

            <!-- Descripción -->
            <p class="text-gray-600 text-base md:text-lg mb-8">Lo sentimos, no pudimos encontrar lo que estás buscando. Tal vez el enlace está roto o fue eliminado.</p>

            <!-- Botón -->
            <p-button (click)="gotoHome()" icon="pi pi-home" label="Volver al inicio" severity="primary" class="px-6 py-3 text-base"></p-button>
        </div>
    `
})
export class Notfound {

    constructor(private state:StateService, private router:Router){

    }

    gotoHome(){
        this.state.setLoading(true);
        this.router.navigate(['/'])
    }
}
