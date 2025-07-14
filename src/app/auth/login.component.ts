// src/app/auth/login.component.ts
import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-login',
  template: `<p>Redirigiendo al proveedor de identidad…</p>`
})
export class LoginComponent implements OnInit {
  constructor(private oidc: OidcSecurityService) {}
  ngOnInit() {
    this.oidc.authorize();
  }
}
