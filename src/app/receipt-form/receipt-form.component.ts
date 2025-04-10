import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ReceiptService } from '../receipt.service';
import { Receipt } from '../receipt.model';

@Component({
  selector: 'app-receipt-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './receipt-form.component.html',
  styleUrl: './receipt-form.component.css',
})
export class ReceiptFormComponent {
  private fb = inject(FormBuilder);
  private receiptService = inject(ReceiptService);

  receiptForm: FormGroup;
  selectedFile: File | null = null;
  message: string | null = null;
  errorMessage: string | null = null;

  constructor() {
    this.receiptForm = this.fb.group({
      date: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(0.01)]],
      description: ['', Validators.required],
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  onSubmit(): void {
    if (this.receiptForm.valid && this.selectedFile) {
      const receipt = new Receipt(
        this.receiptForm.get('date')?.value,
        this.receiptForm.get('amount')?.value,
        this.receiptForm.get('description')?.value
      );

      this.receiptService.addReceipt(receipt, this.selectedFile).subscribe({
        next: (response: any) => {
          this.message = response.message || 'Receipt submitted successfully!';
          this.receiptForm.reset();
          this.selectedFile = null;
        },
        error: (error) => {
          this.errorMessage =
            'Error submitting receipt!! Please try again later. If the problem persists, contact the system administrator for assistance. If you are a developer, please check console for more details';
          console.log(`Error = ${error.message}`);
        },
      });
    }
  }
}
