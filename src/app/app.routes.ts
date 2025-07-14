import { Routes } from '@angular/router';
import { HomeComponent }   from './pages/home/home.component';
import { LoginComponent }  from './auth/login.component';
import { LogoutComponent } from './auth/logout.component';

export const routes: Routes = [
  { path: '',       component: HomeComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  {
    path: 'pdfs',
    loadChildren: () => import('./pdf/pdf.module').then(m => m.PdfModule)
  },
  { path: '**', redirectTo: '' }
];
