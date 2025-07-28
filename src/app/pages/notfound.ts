import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { StateService } from '../core/state.service';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';

@Component({
    selector: 'app-notfound',
    standalone: true,
    imports: [RouterModule, ButtonModule, TranslateModule, SharedModule],
    template: `
        <svg viewBox="0 0 960 540" xmlns="http://www.w3.org/2000/svg" version="1.1" class="min-w-screen min-h-[100vw] fixed left-0 bottom-[-10rem] z-0 -rotate-90" preserveAspectRatio="none">
            <path
                d="M0 331L26.7 321C53.3 311 106.7 291 160 291C213.3 291 266.7 311 320 329.5C373.3 348 426.7 365 480 373.2C533.3 381.3 586.7 380.7 640 373.8C693.3 367 746.7 354 800 341.2C853.3 328.3 906.7 315.7 933.3 309.3L960 303L960 541L0 541Z"
                fill="var(--p-green-200)"
                stroke-linecap="round"
                stroke-linejoin="miter"
            ></path>
        </svg>
        <div class="min-h-screen bg-green- flex flex-col items-center justify-center text-center px-4 relative">
            <img src="img/logo.png" alt="Logo Bambu" class="w-52 mb-6 absolute top-6 left-6 sm:left-10" />
            <div class="relative w-full max-w-xl mb-8 rounded-full overflow-hidden bg-gradient-to-t from-green-500 to-emerald-50 p-12 shadow-lg ring-4 ring-green-300">
                <img src="img/error/asset-error.svg" alt="404 ilustración" class="w-full h-auto object-contain transition-transform duration-300 hover:scale-105" />
            </div>
            <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">E{{ 'notfound.title' | translate }}</h1>
            <p class="text-gray-600 text-base md:text-lg mb-8">{{ 'notfound.description' | translate }}</p>
            <p-button (click)="gotoHome()" icon="pi pi-home" label="{{ 'notfound.button' | translate }}" severity="primary" class="px-6 py-3 text-base"></p-button>
            <div class="text-black rounded-xl transition duration-300 shadow-sm py-2 cursor-pointer mt-4 ">
                <app-lang-switcher class="w-full"></app-lang-switcher>
            </div>
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
