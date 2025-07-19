// src/app/auth/callback/callback.component.ts
import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { AuthService }       from '../auth.service';
import { LoginResponse }     from 'angular-auth-oidc-client';

@Component({
  selector: 'app-callback',
  template: `<p>Procesando inicio de sesión…</p>`
})
export class CallbackComponent implements OnInit {
  constructor(
    private auth:   AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.auth.completeAuthentication().subscribe((res: LoginResponse) => {
      // 1) extrae el payload del ID token
      const idToken = res.idToken!;
      const [, payloadB64] = idToken.split('.');
      const payload = JSON.parse(atob(payloadB64));

      // 2) lee el grupo 'Admin' si existe
      const groups: string[] = payload['cognito:groups'] || [];

      // 3) redirige según rol
      if (groups.includes('Admin')) {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/pdfs']);
      }
    });
  }
}
