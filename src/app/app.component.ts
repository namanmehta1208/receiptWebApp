import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReceiptFormComponent } from './receipt-form/receipt-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReceiptFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'receiptWebApp';
}
