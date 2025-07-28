import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
import { StateService } from '../../core/state.service';
import { AuthService } from '../auth.service';
import { User } from '../../models/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-register',
    standalone: false,
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss',
    providers: [MessageService]
})
export class RegisterComponent {
    form_register: FormGroup;
    user: Partial<User> = {
        email: '',
        name: '',
        lastname: '',
        zip: '',
        state: '',
        municipality: '',
        street: '',
        suburb: ''
    };

    password: string = '';
    termsAccepted: boolean = false;

    constructor(
        private authService: AuthService,
        private state: StateService,
        private firestore: Firestore,
        private router: Router,
        private fb: FormBuilder,
        private messageService: MessageService
    ) {
        this.form_register = fb.group({
            email: [, [Validators.required, Validators.email]],
            password: [, Validators.required],
            name: [, Validators.required],
            lastname: [, Validators.required],
            zip: [, Validators.required],
            state: [, Validators.required],
            municipality: [, Validators.required],
            street: [, Validators.required],
            suburb: [, Validators.required],
            termsAccepted: [false, Validators.requiredTrue]
        });
    }

    async registerUser() {
        this.messageService.add({ severity: 'info', summary: 'Entrando', detail: 'prueba', life: 3000 });
        this.user.email = this.form_register.value.email;
        this.user.name = this.form_register.value.name;
        this.user.lastname = this.form_register.value.lastname;
        this.user.zip = this.form_register.value.zip;
        this.user.state = this.form_register.value.state;
        this.user.municipality = this.form_register.value.municipality;
        this.user.street = this.form_register.value.street;
        this.user.suburb = this.form_register.value.suburb;
        this.password = this.form_register.value.password;
        try {
            const cred = await this.authService.register(this.user.email!, this.password);
            if (!cred || !cred.user) throw new Error('No se pudo registrar el usuario');

            const uid = cred.user.uid;
            const userData: User = {
                uid,
                email: this.user.email!,
                name: this.user.name!,
                lastname: this.user.lastname!,
                zip: this.user.zip!,
                state: this.user.state!,
                municipality: this.user.municipality!,
                street: this.user.street!,
                suburb: this.user.suburb!
            };

            await setDoc(doc(this.firestore, 'users', uid), userData);
            this.state.setUser(cred.user);

            this.showConfirmation = true;
            this.checkVerificationStatus();
        } catch (error) {
            console.error('Error al registrar usuario:', error);
            this.messageService.add({ severity: 'error', summary: 'Error al registrar usuario', detail: error + '', life: 3000 });
        }
    }

    showConfirmation = false;
    checkingVerification = false;

    checkVerificationStatus() {
        this.checkingVerification = true;
        this.intervalId = setInterval(async () => {
            const user = await this.authService.getCurrentUser();
            console.log('usuario');
            console.log(user);

            if (user?.emailVerified) {
                clearInterval(this.intervalId);

                this.authService.updateUserState(user);

                this.state.setUser(user);

                this.state.setLoading(true)
                setTimeout(() => {
                    this.state.setLoading(false)  
                    this.router.navigate(['/']);
                }, 1500);
            }
        }, 3000);
    }

    private intervalId?: any;

    ngOnDestroy() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }
}
