import { Routes } from '@angular/router';
import { HomeComponent }   from './pages/home/home.component';
import { LoginComponent }  from './auth/login.component';
import { LogoutComponent } from './auth/logout.component';
import { authGuard } from './auth/auth.guard';
import { adminGuard } from './auth/admin.guard';
import { CallbackComponent } from './auth/callback/callback.component';

export const routes: Routes = [
  { path: 'auth-callback', component: CallbackComponent },

  //  Rutas públicas
  { path: '',       component: HomeComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  // Rutas protegidas
  // Clientes y Admins pueden ver PDFs
  {
    path: 'pdfs',
    loadChildren: () => import('./pdf/pdf.module').then(m => m.PdfModule),
    canActivate: [authGuard]
  },
  // Solo Admin: módulo de gestión de PDFs
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [adminGuard]
  },
  { path: '**', redirectTo: '' }
];
