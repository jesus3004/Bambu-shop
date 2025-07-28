import { Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LayoutService } from '../../layout/service/layout.service';
import { MessageService } from 'primeng/api';
import { StateService } from '../../core/state.service';

@Component({
    selector: 'app-login',
    standalone: false,
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    providers: [MessageService]
})
export class LoginComponent {
    email: string = '';
    password: string = '';
    showPassword: boolean = false;
    rememberMe: boolean = false;
    loading: boolean = false;

    constructor(
        private auth: AuthService,
        public router: Router,
        private messageService: MessageService,
        private state: StateService
    ) {}

    showVerifyCard = false;
    checkingVerification = false;
    resending = false;
    emailSent = false;
    intervalId?: any;
    cooldown = 60000;
    countdown = 0;
    countdownInterval?: any;

    login() {
        this.loading = true;

        this.auth
            .login(this.email, this.password)
            .then((cred) => {
                if (!cred.user.emailVerified) {
                    this.showVerifyCard = true;
                    this.checkVerificationStatus(); 
                } else {
                    this.state.setLoading(true);
                    setTimeout(() => {
                        this.state.setLoading(false);
                        this.router.navigate(['/']);
                    }, 1500);
                }
            })
            .catch((err) => {
                const errorMsg = this.getErrorMessage(err.code);
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error de inicio de sesión',
                    detail: errorMsg
                });
            })
            .finally(() => {
                this.loading = false;
            });
    }

    checkVerificationStatus() {
        this.checkingVerification = true;
        this.intervalId = setInterval(async () => {
            const user = await this.auth.getCurrentUser();
            if (user?.emailVerified) {
                clearInterval(this.intervalId);
                this.auth.updateUserState(user);
                this.state.setUser(user);
                this.state.setLoading(true);
                setTimeout(() => {
                    this.state.setLoading(false);
                    this.router.navigate(['/']);
                }, 1500);
            }
        }, 3000);
    }

    resendVerificationEmail() {
        this.resending = true;

        this.auth
            .resendVerificationEmail()
            .then(() => {
                this.emailSent = true;
                this.startCountdown();
            })
            .catch(() => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'No se pudo enviar el correo de verificación.'
                });
                this.resending = false;
            });
    }

    startCountdown() {
        this.countdown = this.cooldown / 1000;
        this.countdownInterval = setInterval(() => {
            this.countdown--;
            console.log(this.countdown);
            
            if (this.countdown <= 0) {
                clearInterval(this.countdownInterval);
                this.resending = false;
                this.emailSent = false;
            }
        }, 1000);
    }

    ngOnDestroy() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }

    private getErrorMessage(code: string): string {
        switch (code) {
            case 'auth/invalid-email':
                return 'Correo inválido.';
            case 'auth/user-not-found':
                return 'Usuario no encontrado.';
            case 'auth/wrong-password':
                return 'Contraseña incorrecta.';
            case 'auth/user-disabled':
                return 'Usuario deshabilitado.';
            default:
                return 'Ocurrió un error inesperado.';
        }
    }
}
