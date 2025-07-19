// src/app/auth/admin.guard.ts
import { Injectable }             from '@angular/core';
import { CanActivate, Router,
         UrlTree }                from '@angular/router';
import { AuthService }            from './auth.service';
import { Observable }             from 'rxjs';
import { map }                    from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class adminGuard implements CanActivate {
  constructor(
    private auth:   AuthService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean|UrlTree> {
    return this.auth.getRoles$().pipe(
      map((roles: string[]) =>
        roles.includes('Admin')
          ? true
          : this.router.createUrlTree(['/'])
      )
    );
  }
}
