import { Injectable } from '@angular/core';
import { Firestore, doc, getDoc, setDoc } from '@angular/fire/firestore';
import { User } from '../models/user.model';
import { map, switchMap, take } from 'rxjs';
import { AuthService } from '../auth/auth.service';
@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(
        private firestore: Firestore,
        private authService: AuthService
    ) {}

    getCurrentUserProfile() {
        return this.authService.user$.pipe(
            take(1),
            switchMap((user) => {
                if (!user) return [null];
                const ref = doc(this.firestore, `users/${user.uid}`);
                return getDoc(ref).then((snapshot) => snapshot.data() as User);
            })
        );
    }

    /** Actualiza el perfil */
    updateUserProfile(data: Partial<User>) {
        return this.authService.user$.pipe(take(1)).subscribe((user) => {
            if (user) {
                const ref = doc(this.firestore, `users/${user.uid}`);
                setDoc(ref, data, { merge: true });
            }
        });
    }
}
