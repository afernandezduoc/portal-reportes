import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PdfService } from '../services/pdf.service';

@Component({
  selector: 'app-pdf-viewer',
  template: `
    <ngx-extended-pdf-viewer
      [src]="blobUrl"
      useBrowserLocale="true"
      height="100%"
    ></ngx-extended-pdf-viewer>
    <button mat-button (click)="download()">Descargar</button>
  `
})
export class PdfViewerComponent {
  blobUrl!: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { id: string; fileName: string },
    private pdfService: PdfService
  ) {
    this.pdfService.getPdfBlob(data.id).subscribe(blob => {
      this.blobUrl = URL.createObjectURL(blob);
    });    
  }

  download() {
    this.pdfService.downloadPdf(this.data.id);
  }
}
