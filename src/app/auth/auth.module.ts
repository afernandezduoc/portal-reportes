import { NgModule } from '@angular/core';
import { AuthModule, OidcSecurityService } from 'angular-auth-oidc-client';
import { LoginComponent } from './login.component';
import { LogoutComponent } from './logout.component';

@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent
  ],
  imports: [],
  providers: [
    OidcSecurityService
  ],
  exports: [ AuthModule ]
})
export class AppAuthModule {}
