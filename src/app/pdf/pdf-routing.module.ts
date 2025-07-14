import { NgModule }            from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfListComponent }     from './pdf-list/pdf-list.component';

const routes: Routes = [
  { path: '', component: PdfListComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PdfRoutingModule {}
