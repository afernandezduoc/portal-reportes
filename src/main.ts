// 📂 src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations }    from '@angular/platform-browser/animations';
import { provideRouter }        from '@angular/router';
import { importProvidersFrom }  from '@angular/core';
import { HttpClientModule }     from '@angular/common/http';

import { AppComponent }         from './app/app.component';
import { routes }               from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),          // BrowserAnimationsModule
    importProvidersFrom(
      HttpClientModule            // HTTP
    ),
    provideRouter(routes)         // RouterModule.forRoot(routes)
  ]
})
.catch(err => console.error(err));
