import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';

import { PdfRoutingModule } from './pdf-routing.module';
import { PdfListComponent } from './pdf-list/pdf-list.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { PdfUploadComponent } from './pdf-upload/pdf-upload.component';

@NgModule({
  declarations: [PdfListComponent, PdfViewerComponent, PdfUploadComponent],
  imports: [
    CommonModule,
    PdfRoutingModule,
    ReactiveFormsModule,
    NgxExtendedPdfViewerModule,
    MatDialogModule,
    MatDatepickerModule,
    MatInputModule,
    MatButtonModule,
    MatNativeDateModule
  ]
})
export class PdfModule { }
