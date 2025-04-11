
# receiptWebApp

This repository contains the frontend application for a receipt submission system, built with Angular. Users can submit receipts by completing a form with details like date, amount, description, and an uploaded file. The application integrates with a backend API to store receipt data in a MySQL database.

# Running the Application
Prerequisites
Before setting up the project, ensure you have the following installed:

- Node.js (version 18 or later)
- Angular CLI (version 17 or later)
- A running instance of the receiptAPI backend (refer to its repository for setup instructions).
---

# Clone the Repository
 ```bash
 git clone https://github.com/namanmehta1208/receiptWebApp
cd receiptWebApp
 ```
 ---

# Install Dependencies
```bash
npm install
```
---

# Configure API Endpoint (If your backend is running on different port other than https://localhost:7237)
- Open src/app/receipt.service.ts and Set the apiUrl to match your backend’s address, for example:
```bash
private apiUrl = 'https://localhost:7237/api/receipts';
```
---

# Run the application
- Launch the Angular development server:
```bash
ng serve
```
---
