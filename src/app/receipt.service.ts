import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Receipt } from './receipt.model';

@Injectable({
  providedIn: 'root',
})
export class ReceiptService {
  private apiUrl = 'https://localhost:7237/api/receipts';
  private http = inject(HttpClient);

  constructor() {}

  addReceipt(receipt: Receipt, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('date', receipt.date);
    formData.append('amount', receipt.amount.toString());
    formData.append('description', receipt.description);
    formData.append('file', file);

    return this.http.post(this.apiUrl, formData);
  }
}
