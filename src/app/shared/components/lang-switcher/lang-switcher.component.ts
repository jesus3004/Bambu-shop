import { Component, Input, input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-lang-switcher',
    standalone: false,
    template: `
        <div class="flex flex-row items-center" (click)="toggleLanguage()">
            <img src="img/flag/flag_placeholder.png" class="flag flag-{{ 'lang.icon' | translate }} h-4" style="width:21px" />
            <span class="ml-2">{{ 'lang.switch' | translate }}</span>
        </div>
    `,
    styleUrl: './lang-switcher.component.scss'
})
export class LangSwitcherComponent {
    currentLang: string = 'es';
    @Input() es_mobil:boolean | undefined;
    solo_boton:boolean = true;

    constructor(private translate: TranslateService) {
        this.currentLang = this.translate.currentLang || this.translate.getDefaultLang() || 'es';
        this.translate.use(this.currentLang);
    }

    toggleLanguage() {
        this.currentLang = this.currentLang === 'es' ? 'en' : 'es';
        this.translate.use(this.currentLang);
    }
}
