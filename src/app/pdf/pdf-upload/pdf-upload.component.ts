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
      this.errorMsg = 'Selecciona un archivo PDF.';
      return;
    }
    this.pdfService.uploadPdf(this.selectedFile)
      .subscribe({
        next: id => {
          // al subir correctamente, volvemos al listado
          this.router.navigate(['/pdfs']);
        },
        error: err => {
          console.error(err);
          this.errorMsg = 'Error al subir el PDF.';
        }
      });
  }
}
