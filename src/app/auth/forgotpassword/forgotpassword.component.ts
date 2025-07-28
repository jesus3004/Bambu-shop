import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-forgotpassword',
    standalone: false,
    templateUrl: './forgotpassword.component.html',
    styleUrl: './forgotpassword.component.scss'
})
export class ForgotpasswordComponent {
    email: string = '';
    showVerifyCard = false;
    showSentCard = false;
    checkingVerification = false;
    resending = false;
    countdown = 0;
    countdownInterval: any;

    constructor(
        private auth: AuthService,
        public router: Router
    ) {}

    submit() {
        this.auth.getCurrentUser().then((user) => {
            if (user && !user.emailVerified && user.email === this.email) {
                this.showVerifyCard = true;
                this.checkingVerification = true;
                this.watchEmailVerification();
            } else {
                this.auth
                    .resetPassword(this.email)
                    .then(() => {
                        this.showSentCard = true;
                    })
                    .catch((error) => {
                        alert(this.getErrorMessage(error.code));
                    });
            }
        });
    }

    resendVerificationEmail() {
        this.resending = true;
        this.auth
            .resendVerificationEmail()
            .then(() => {
                this.startCountdown();
            })
            .catch(() => {
                alert('No se pudo reenviar el correo.');
                this.resending = false;
            });
    }

    startCountdown() {
        this.countdown = 60;
        this.countdownInterval = setInterval(() => {
            this.countdown--;
            if (this.countdown <= 0) {
                clearInterval(this.countdownInterval);
                this.resending = false;
            }
        }, 1000);
    }

    watchEmailVerification() {
        const interval = setInterval(async () => {
            const user = await this.auth.getCurrentUser();
            if (user?.emailVerified) {
                clearInterval(interval);
                this.showVerifyCard = false;
                this.auth
                    .resetPassword(this.email)
                    .then(() => {
                        this.showSentCard = true;
                    })
                    .catch((error) => {
                        alert(this.getErrorMessage(error.code));
                    });
            }
        }, 3000);
    }

    private getErrorMessage(code: string): string {
        switch (code) {
            case 'auth/invalid-email':
                return 'Correo inválido.';
            case 'auth/user-not-found':
                return 'No existe una cuenta con ese correo.';
            default:
                return 'Ocurrió un error inesperado.';
        }
    }
}
