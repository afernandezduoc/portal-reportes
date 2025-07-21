// src/app/admin/admin-dashboard/admin-dashboard.component.ts
import { Component, OnInit }              from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PdfService, PdfMeta }            from '../../pdf/services/pdf.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  uploadForm!: FormGroup;
  pdfs: PdfMeta[] = [];

  constructor(
    private fb: FormBuilder,
    private pdfSvc: PdfService
  ) {}

  ngOnInit(): void {
    this.uploadForm = this.fb.group({
      file: [null, Validators.required]
    });
    this.loadPdfs();
  }

  loadPdfs() {
    this.pdfSvc.listPdfs().subscribe(list => (this.pdfs = list));
  }

  onFileSelected(e: Event) {
    const inp = (e.target as HTMLInputElement);
    if (inp.files?.length) {
      this.uploadForm.patchValue({ file: inp.files[0] });
    }
  }

  submit() {
    if (this.uploadForm.invalid) return;
    const file: File = this.uploadForm.value.file;
    this.pdfSvc.uploadPdf(file).subscribe(() => {
      this.uploadForm.reset();
      this.loadPdfs();
    });
  }

  delete(pdf: PdfMeta) {
    if (!confirm(`¿Eliminar "${pdf.fileName}"?`)) return;
    this.pdfSvc.deletePdf(pdf.id).subscribe(() => this.loadPdfs());
  }
}
