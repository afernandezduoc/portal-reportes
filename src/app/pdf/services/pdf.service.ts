import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { saveAs } from 'file-saver';

export interface PdfMeta {
  id: string;
  fileName: string;
}

@Injectable({ providedIn: 'root' })
export class PdfService {
  private baseUrl = 'http://localhost:8080/pdfs'; // URL de microservicio para PDFs

  constructor(private http: HttpClient) {}

  listPdfs(): Observable<PdfMeta[]> {
    return this.http.get<string[]>(`${this.baseUrl}`).pipe(
      map(arr =>
        arr.map(str => {
          const [id, fileName] = str.split(' - ');
          return { id: id.trim(), fileName: fileName.trim() };
        })
      )
    );
  }

  downloadPdf(id: string): void {
    this.http
      .get(`${this.baseUrl}/${id}`, { responseType: 'blob' })
      .subscribe(blob => {
        // usa file-saver para descargar
        saveAs(blob, `${id}.pdf`);
      });
  }
}
