import { Routes } from '@angular/router';

export const routes: Routes = [
    // aquí añadimos “lazy load” para AuthModule:
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then(m => m.AuthModule)
  },
  // fallback
  { path: '**', redirectTo: '' }
];
