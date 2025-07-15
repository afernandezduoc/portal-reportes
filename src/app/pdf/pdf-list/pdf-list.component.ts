// src/app/pdf/pdf-list/pdf-list.component.ts
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PdfService, PdfMeta } from '../services/pdf.service';
import { MatDialog } from '@angular/material/dialog';
import { PdfViewerComponent } from '../pdf-viewer/pdf-viewer.component';

@Component({
  selector: 'app-pdf-list',
  templateUrl: './pdf-list.component.html',
  styleUrls: ['./pdf-list.component.css']
})
export class PdfListComponent implements OnInit {
  pdfs: PdfMeta[] = [];
  filtered: PdfMeta[] = [];
  dateControl = new FormControl<Date | null>(null);

  constructor(
    private pdfService: PdfService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
  this.pdfService.listPdfs().subscribe(list => {
    console.log('PDFs recibidos:', list);
    this.pdfs     = list;
    this.filtered = list;
  });
    this.dateControl.valueChanges.subscribe(d => this.applyFilter(d));
  }

  applyFilter(date: Date | null) {
    if (!date) {
      this.filtered = this.pdfs;
    } else {
      const fecha = date.toISOString().split('T')[0];
      this.filtered = this.pdfs.filter(p => p.fileName.includes(fecha));
    }
  }

  openViewer(pdf: PdfMeta) {
    this.dialog.open(PdfViewerComponent, {
      data: { id: pdf.id, fileName: pdf.fileName },
      width: '80vw',
      height: '80vh'
    });
  }

  download(pdf: PdfMeta) {
    this.pdfService.downloadPdf(pdf.id);
  }
}
