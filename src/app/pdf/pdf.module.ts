import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import necessary components and services
import { PdfRoutingModule } from './pdf-routing.module';
import { PdfListComponent } from './pdf-list/pdf-list.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
// Angular Material imports
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule }        from '@angular/material/toolbar';
import { MatSidenavModule }        from '@angular/material/sidenav';
import { MatListModule }           from '@angular/material/list';
import { MatIconModule }           from '@angular/material/icon';
import { MatGridListModule }      from '@angular/material/grid-list';
import { MatCardModule }          from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [PdfListComponent, PdfViewerComponent],
  imports: [
    CommonModule,
    PdfRoutingModule,
    ReactiveFormsModule,
    NgxExtendedPdfViewerModule,
    MatDialogModule,
    MatDatepickerModule,
    MatInputModule,
    MatButtonModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule
  ]
})
export class PdfModule { }
