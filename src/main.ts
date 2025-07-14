import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations }    from '@angular/platform-browser/animations';
import { provideRouter }        from '@angular/router';
import { importProvidersFrom }  from '@angular/core';
import { HttpClientModule }     from '@angular/common/http';
import { AuthModule }           from 'angular-auth-oidc-client';

import { AppComponent }         from './app/app.component';
import { routes }               from './app/app.routes';
import { environment }          from './environments/environment';
import { AppAuthModule }        from './app/auth/auth.module';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    importProvidersFrom(
      HttpClientModule,
      AppAuthModule,
      AuthModule.forRoot({
        config: {
          authority:            environment.oidc.authority,
          redirectUrl:          environment.oidc.redirectUrl,
          postLogoutRedirectUri:environment.oidc.postLogoutRedirectUrl,
          clientId:             environment.oidc.clientId,
          scope:                environment.oidc.scope,
          responseType:         environment.oidc.responseType,
          silentRenew:          environment.oidc.silentRenew,
          useRefreshToken:      environment.oidc.useRefreshToken
        }
      })
    ),
    provideRouter(routes)
  ]
})
.catch(err => console.error(err));
