export class Receipt {
  date: string;
  amount: number;
  description: string;

  constructor(date: string, amount: number, description: string) {
    this.date = date;
    this.amount = amount;
    this.description = description;
  }
}
