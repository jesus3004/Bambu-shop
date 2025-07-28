import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, RouterModule, AvatarModule, ButtonModule, DrawerModule],
    template: `
        <div class="blok lg:hidden">
            <button class="focus:outline-none lg:hidden" (click)="router.navigate(['/'])">
                <i class="pi pi-home text-2xl"></i>
            </button>
        </div>
    `
})
export class AppMenu {
    constructor(public router:Router){

    }
}
