import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { saveAs } from 'file-saver';
import { environment } from '../../../environments/environment';

export interface PdfMeta {
  id: string;
  fileName: string;
}

@Injectable({ providedIn: 'root' })
export class PdfService {
  private baseUrl = `${environment.apiUrl}/pdfs`; // URL de microservicio para PDFs

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

  getPdfBlob(id: string): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/${id}`, {
      responseType: 'blob'
    });
  }

  downloadPdf(id: string): void {
    this.getPdfBlob(id).subscribe(blob => {
      saveAs(blob, `${id}.pdf`);
    });
  }
}
