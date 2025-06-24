import { Component } from '@angular/core';
import { PdfService }  from '../services/pdf.service';
import { Router }      from '@angular/router';

@Component({
  selector: 'app-pdf-upload',
  templateUrl: './pdf-upload.component.html'
})
export class PdfUploadComponent {
  selectedFile?: File;
  errorMsg = '';

  constructor(
    private pdfService: PdfService,
    private router: Router
  ) {}

  onFileChange(ev: Event) {
    const input = ev.target as HTMLInputElement;
    this.selectedFile = input.files?.[0];
  }

  onSubmit() {
    if (!this.selectedFile) {
      this.errorMsg = 'Selecciona un archivo.';
      return;
    }
    if (this.selectedFile.type !== 'application/pdf') {
      this.errorMsg = 'Solo se permiten archivos PDF.';
      return;
    }

    this.pdfService.uploadPdf(this.selectedFile)
      .subscribe({
        next: () => {
          this.router.navigate(['/pdfs']);
        },
        error: () => {
          this.errorMsg = 'Error al subir el PDF.';
        }
      });
  }
}
