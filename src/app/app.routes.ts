// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { LogoutComponent } from './auth/logout.component';

export const routes: Routes = [
  { path: 'login',  component: LoginComponent  },
  { path: 'logout', component: LogoutComponent },
  {
    path: 'pdfs',
    loadChildren: () => import('./pdf/pdf.module').then(m => m.PdfModule)
  },
  { path: '',   redirectTo: 'pdfs', pathMatch: 'full' },
  { path: '**', redirectTo: 'pdfs' }
];
