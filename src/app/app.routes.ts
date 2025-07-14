// 📂 src/app/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '',       redirectTo: 'pdfs', pathMatch: 'full' },
  { path: 'pdfs',
    loadChildren: () =>
      import('./pdf/pdf.module').then(m => m.PdfModule)
  },
  { path: '**',     redirectTo: 'pdfs' }
];
