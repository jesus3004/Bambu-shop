import { Injectable } from '@angular/core';
import { User, Auth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendEmailVerification } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { sendPasswordResetEmail } from '@angular/fire/auth';
import { User as FirebaseUser } from '@angular/fire/auth';

export interface AppUser {
    uid: string;
    email: string | null;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private userSubject = new BehaviorSubject<AppUser | null>(null);
    user$ = this.userSubject.asObservable();

    constructor(
        private afAuth: Auth,
        private firestore: Firestore
    ) {
        onAuthStateChanged(this.afAuth, async (user) => {
            if (user) {
                await user.reload();
                const refreshedUser = await this.afAuth.currentUser;
                if (refreshedUser?.emailVerified) {
                    this.userSubject.next({ uid: refreshedUser.uid, email: refreshedUser.email });
                } else {
                    this.userSubject.next(null);
                }
            } else {
                this.userSubject.next(null);
            }
        });
    }

    register(email: string, password: string) {
        return createUserWithEmailAndPassword(this.afAuth, email, password).then((cred) => {
            if (cred.user) {
                sendEmailVerification(cred.user);
                return cred;
            } else {
                throw new Error('Usuario no creado correctamente');
            }
        });
    }

    resetPassword(email: string) {
        return sendPasswordResetEmail(this.afAuth, email);
    }

    login(email: string, password: string) {
        return signInWithEmailAndPassword(this.afAuth, email, password).then(async (cred) => {
            if (cred.user) {
                await cred.user.reload(); 
                if (cred.user.emailVerified) {
                    this.userSubject.next({ uid: cred.user.uid, email: cred.user.email });
                } else {
                    this.userSubject.next(null);
                }
            }
            return cred;
        });
    }

    logout() {
        return signOut(this.afAuth);
    }

    getCurrentUser(): Promise<User | null> {
        return new Promise((resolve) => {
            onAuthStateChanged(this.afAuth, async (user) => {
                if (user) {
                    await user.reload(); 
                    resolve(this.afAuth.currentUser); 
                } else {
                    resolve(null);
                }
            });
        });
    }
    updateUserState(user: User) {
        this.userSubject.next({ uid: user.uid, email: user.email });
    }

    resendVerificationEmail(): Promise<void> {
        return this.getCurrentUser().then((user: FirebaseUser | null) => {
            if (user) {
                return sendEmailVerification(user);
            } else {
                return Promise.reject('No hay usuario autenticado.');
            }
        });
    }
}
