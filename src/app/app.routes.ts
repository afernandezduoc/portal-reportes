import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path: 'pdfs',
    loadChildren: () =>
      import('./pdf/pdf.module').then(m => m.PdfModule)
  },
  { path: '**', redirectTo: 'pdfs' }
];
