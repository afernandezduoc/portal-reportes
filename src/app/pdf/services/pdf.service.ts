// src/app/pdf/services/pdf.service.ts
import { Injectable }       from '@angular/core';
import { HttpClient }       from '@angular/common/http';
import { map }              from 'rxjs/operators';
import { Observable }       from 'rxjs';
import { saveAs }           from 'file-saver';
import { environment }      from '../../../environments/environment';

export interface PdfMeta {
  id: string;
  fileName: string;
}

@Injectable({ providedIn: 'root' })
export class PdfService {
  private baseUrl = `${environment.apiUrl}/pdfs`;

  constructor(private http: HttpClient) {}

  listPdfs(): Observable<PdfMeta[]> {
    return this.http.get<string[]>(this.baseUrl).pipe(
      map(arr =>
        arr.map(item => {
          const [id, fileName] = item.split(' - ');
          return { id: id.trim(), fileName: fileName.trim() };
        })
      )
    );
  }

  uploadPdf(file: File): Observable<any> {
    const form = new FormData();
    form.append('file', file, file.name);
    return this.http.post(`${this.baseUrl}/upload`, form);
  }

  getPdfBlob(id: string): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/${id}`, { responseType: 'blob' });
  }

  downloadPdf(id: string) {
    this.getPdfBlob(id).subscribe(blob => saveAs(blob, `${id}.pdf`));
  }

  deletePdf(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
