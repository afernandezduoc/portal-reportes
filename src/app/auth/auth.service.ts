// src/app/auth/auth.service.ts
import { Injectable }             from '@angular/core';
import { Router }                 from '@angular/router';
import { OidcSecurityService,
         LoginResponse, AuthenticatedResult }         from 'angular-auth-oidc-client';
import { Observable }             from 'rxjs';
import { tap, map }               from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
   /** emite `true`/`false` según el estado de autenticación */
  isAuthenticated$: Observable<boolean> =
    this.oidc.isAuthenticated$.pipe(
      map((res: AuthenticatedResult) => res.isAuthenticated)
    );
  constructor(
    private oidc:   OidcSecurityService,
    private router: Router
  ) {}

  login(): void {
    this.oidc.authorize();
  }

  completeAuthentication(): Observable<LoginResponse> {
    return this.oidc.checkAuth().pipe(
      tap(({ isAuthenticated }) => {
        if (!isAuthenticated) {
          this.router.navigate(['/']);
        }
      })
    );
  }

  logout(): void {
    this.oidc.logoff();
  }

  /**
   * Decodifica el ID token y extrae el claim "cognito:groups"
   */
  getRoles$(): Observable<string[]> {
    return this.completeAuthentication().pipe(
      map((res: LoginResponse) => {
        const idToken = res.idToken!;
        // partimos el JWT en [header, payload, signature]
        const [, payloadB64] = idToken.split('.');
        const payload = JSON.parse(atob(payloadB64)) as any;
        return Array.isArray(payload['cognito:groups'])
          ? payload['cognito:groups']
          : [];
      })
    );
  }
}
