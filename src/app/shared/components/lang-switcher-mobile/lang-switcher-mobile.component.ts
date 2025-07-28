import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-lang-switcher-mobile',
  standalone: false,
  template:`
        <div class="flex flex-row items-center" (click)="toggleLanguage()">
            <img src="img/flag/flag_placeholder.png" class="flag flag-{{ 'lang.icon' | translate }} h-4" style="width:21px" />
        </div>
    `,
  styleUrl: './lang-switcher-mobile.component.scss'
})
export class LangSwitcherMobileComponent {
currentLang: string = 'es';
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
