import { NgModule } from '@angular/core';
import { AuthModule, OidcSecurityService } from 'angular-auth-oidc-client';
import { LoginComponent } from './login.component';
import { LogoutComponent } from './logout.component';

@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    AuthModule.forRoot({
      config: {
        authority: 'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_4EmBPrDK0',
        redirectUrl: window.location.origin + '/auth-callback',
        postLogoutRedirectUri: window.location.origin + '/',
        clientId: '20gb5raf2etl8md7ls4hnnmb5n',
        scope: 'openid profile email',
        responseType: 'code',
        silentRenew: true,
        silentRenewUrl: window.location.origin + '/silent-renew',
        postLoginRoute: '/pdfs',
      },
    }),
  ],
  providers: [
    OidcSecurityService
  ],
  exports: [ AuthModule ]
})
export class AppAuthModule {}
