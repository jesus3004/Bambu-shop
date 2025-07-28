import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRouting } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

/* Prime ng */
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import {RippleModule} from "primeng/ripple";
import { ToastModule } from 'primeng/toast';


import { AppConfigurator } from '../layout/components/app.configurator';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';

@NgModule({
    declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        AuthRouting,
        CheckboxModule,
        InputTextModule,
        IconFieldModule,
        InputIconModule,
        ButtonModule,
        PasswordModule,
        RippleModule,
        AppConfigurator,
        ReactiveFormsModule,
        ToastModule
    ]
})
export class AuthModule {}
