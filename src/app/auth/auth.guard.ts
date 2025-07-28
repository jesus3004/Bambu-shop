import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Observable, take, map } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}
  canActivate(): Observable<boolean> {
    return this.auth.user$.pipe(
      take(1),
      map(user => {
        if (user) return true;
        this.router.navigate(['/']);
        return false;
      })
    );
  }
}