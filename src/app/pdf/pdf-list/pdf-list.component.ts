// src/app/pdf/pdf-list/pdf-list.component.ts
import { Component, OnInit } from '@angular/core';
import { FormControl }       from '@angular/forms';
import { MatDialog }         from '@angular/material/dialog';
import { PdfService, PdfMeta } from '../services/pdf.service';
import { PdfViewerComponent }  from '../pdf-viewer/pdf-viewer.component';

@Component({
  selector: 'app-pdf-list',
  templateUrl: './pdf-list.component.html',
  styleUrls: ['./pdf-list.component.css']
})
export class PdfListComponent implements OnInit {
  pdfs: PdfMeta[]     = [];
  filtered: PdfMeta[] = [];
  dateControl = new FormControl<Date|null>(null);

  constructor(
    private pdfService: PdfService,
    private dialog:     MatDialog
  ) {}

  ngOnInit() {
    this.pdfService.listPdfs().subscribe(list => {
      this.pdfs     = list;
      this.filtered = list;
    });
    this.dateControl.valueChanges.subscribe(d => this.applyFilter(d));
  }

  applyFilter(date: Date|null) {
    if (!date) {
      this.filtered = this.pdfs;
    } else {
      const iso = date.toISOString().slice(0,10);
      // como no hay campo `date`, filtramos por el nombre
      this.filtered = this.pdfs.filter(p => p.fileName.includes(iso));
    }
  }

  openViewer(pdf: PdfMeta) {
    this.dialog.open(PdfViewerComponent, {
      width:  '80vw',
      height: '80vh',
      data: {
        id:       pdf.id,
        fileName: pdf.fileName
      }
    });
  }

  download(pdf: PdfMeta) {
    this.pdfService.downloadPdf(pdf.id);
  }
}
