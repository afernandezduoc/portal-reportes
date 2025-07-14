// src/app/auth/logout.component.ts
import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-logout',
  template: `<p>Cerrando sesión…</p>`
})
export class LogoutComponent implements OnInit {
  constructor(private oidc: OidcSecurityService) {}
  ngOnInit() {
    this.oidc.logoff();
  }
}
