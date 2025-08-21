# Product Management App

This is a full-stack product management application built with **Next.js 15 (App Router)**, **MongoDB**, and **Mongoose**.  
It allows users to create and view a list of products and fetch individual product details. The app demonstrates server-side APIs, dynamic routing, and integration with MongoDB.

---

## Setup & Installation Instructions

### 1. Clone the repository
```bash
git clone https://github.com/suraiya-jahan-bhuiyan-sraboni/product-management.git
cd product-management
````

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory:

```
NEXT_MONGO_URI=your_mongodb_connection_string
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Route Summary

### API Routes

| Route | Method | Description |
|-------|--------|-------------|
| `/api/products` | GET | Fetch all products |
| `/api/products/[id]` | GET | Fetch a single product by ID |
| `/api/products` | POST | Add a new product (admin) |
| `/api/auth/login` | POST | Authenticate a user and create a session |
| `/api/auth/register` | POST | Register a new user |

### Frontend Pages

| Page | Route | Description |
|------|-------|-------------|
| Product List | `/products` | Displays all products |
| Product Details | `/products/[id]` | Shows details of a specific product |
| Add Product | `/dashboard/add-products` | Admin page to add a new product |
| Dashboard Home | `/dashboard` | Admin dashboard main page |
| Login | `/login` | User login page |
| Register | `/register` | User registration page |
