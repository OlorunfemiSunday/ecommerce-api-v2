<<<<<<< HEAD
# 🛒 E-commerce API v2

A fully functional **RESTful API** for an e-commerce platform built with **Node.js, Express, and MongoDB**.  
This project demonstrates **User Authentication (JWT)**, **Product CRUD**, **Cart Management**, and **Order + Payment Simulation**.

---

## 📂 Folder Structure

```
ecommerce-api-v2/
│── server.js              # Entry point of the application
│── .env                   # Environment variables
│── .gitignore             # Git ignore file
│── package.json           # Project dependencies & scripts
│── README.md              # Project documentation
│
├── src/
│   ├── config/
│   │   └── database.js    # MongoDB connection
│   │
│   ├── controllers/       # Route controllers (business logic)
│   │   ├── authController.js
│   │   ├── productController.js
│   │   ├── cartController.js
│   │   └── orderController.js
│   │
│   ├── middleware/
│   │   └── auth.js        # JWT authentication middleware
│   │
│   ├── models/            # MongoDB models (Mongoose)
│   │   ├── User.js
│   │   ├── Product.js
│   │   ├── Cart.js
│   │   └── Order.js
│   │
│   ├── routes/            # Express routes
│   │   ├── auth.js
│   │   ├── products.js
│   │   ├── cart.js
│   │   └── orders.js
│   │
│   └── utils/
│       └── payment.js     # Simulated payment utility
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/<your-username>/ecommerce-api-v2.git
cd ecommerce-api-v2
```

### 2️⃣ Install dependencies

```bash
npm install
```

Dependencies used:

- **express** → Web framework
- **mongoose** → MongoDB ODM
- **bcryptjs** → Password hashing
- **jsonwebtoken** → JWT authentication
- **dotenv** → Environment variable management

Dev dependencies:

- **nodemon** → Auto restart server on changes

### 3️⃣ Setup environment variables

Create a `.env` file in the root directory:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/ecommerce-api-v2
JWT_SECRET=your_jwt_secret_key
```

### 4️⃣ Start the server

```bash
npm run dev   # with nodemon
# OR
npm start     # normal run
```

Server runs on: `http://localhost:5000`

---

## 🔑 Authentication (JWT)

- `POST /auth/signup` → Register a new user (password is hashed).
- `POST /auth/login` → Login and receive a JWT token.
- `auth.js` middleware protects private routes by validating the token.

Usage:  
Include the JWT token in **Authorization Header**:

```
Authorization: Bearer <your_token_here>
```

---

## 📦 Products API

| Method | Endpoint        | Description                 |
| ------ | --------------- | --------------------------- |
| GET    | `/products`     | Get all products            |
| GET    | `/products/:id` | Get product details         |
| POST   | `/products`     | Create product (admin only) |
| PATCH  | `/products/:id` | Update product (admin only) |
| DELETE | `/products/:id` | Delete product (admin only) |

---

## 🛒 Cart API

| Method | Endpoint           | Description                                     |
| ------ | ------------------ | ----------------------------------------------- |
| POST   | `/cart/add`        | Add product to cart (stock validation included) |
| GET    | `/cart`            | View user’s cart                                |
| DELETE | `/cart/remove/:id` | Remove product from cart                        |

---

## 📦 Orders + Payment API

| Method | Endpoint           | Description                |
| ------ | ------------------ | -------------------------- |
| POST   | `/orders/checkout` | Checkout & create an order |
| GET    | `/orders`          | Get all user orders        |
| GET    | `/orders/:id`      | Get specific order details |

### 💳 Payment Simulation

- Implemented in `utils/payment.js`
- Simulates **80% success rate**
- Orders are marked as `paid: true` if successful

---

## 🧪 Testing with Postman

1. Signup a user → `/auth/signup` {"name", "email", "password"}
2. Login → `/auth/login` {"email", "password"} → get token
3. Create a product (as admin) → `/products`
4. Add product to cart → `/cart/add`
5. Checkout order → `/orders/checkout`

---

## 🚀 Deployment

You can deploy this project on platforms like:

- [Render](https://render.com/)
- [Railway](https://railway.app/)
- [Heroku](https://www.heroku.com/)
- [Vercel](https://vercel.com/) (serverless functions)

---

## 👨‍💻 Author

Built by **Olorunfemi Sunday**  
GitHub: [@MaouzKoncept](https://github.com/OlorunfemiSunday)

---

## 📜 License

This project is licensed under the MIT License.
=======
# ecommerce-api-v2

## Description

Short, clear description of what this API does and who it's for.

## Features

- Products (CRUD), categories
  - Users & authentication
  - Cart & checkout flow
  - Orders, order items, order status
  - Pagination, filtering, sorting

## Installation

````bash
git clone https://github.com/<USERNAME>/<REPO_NAME>.git
cd <REPO_NAME>
npm install
Usage
# Development
npm run dev

# Production (example)
node src/index.js

Technologies

Node.js

Express.js

MongoDB (or your DB)

JWT / Bcrypt (if applicable)

Jest / Supertest (if you plan tests)

Author

Your Name (GitHub: @<USERNAME>)


### Feature ideas you can paste per project

- **notes-app**
  - Create, read, update, delete notes
  - Full-text search by title/body
  - Tagging + filter by tag(s)
  - Pagination & sorting
  - JWT auth (optional)

- **admin-dashboard**
  - RBAC: admin, manager, viewer roles
  - Protected routes & permissions middleware
  - Users & roles management endpoints
  - Audit logs (optional)
  - JWT auth

- **ecommerce-api-v2**
  - Products (CRUD), categories
  - Users & authentication
  - Cart & checkout flow
  - Orders, order items, order status
  - Pagination, filtering, sorting

- **forum-api**
  - Threads & posts
  - Nested/threaded comments
  - Upvotes/downvotes (optional)
  - Moderation endpoints
  - JWT auth

---

# Step 4 — Stage, commit, push (for each repo)

From inside each repo folder (e.g., `notes-app`, then repeat for the others):

```bash
git add .
git commit -m "feat: initial project setup with folder structure and README"
git branch -M main
git push -u origin main

Deliverables Checklist (what reviewers will see)

✅ Public GitHub links for:

notes-app

admin-dashboard

ecommerce-api-v2

forum-api

✅ Each repo shows:

README.md (professional, filled)

.gitignore containing exactly:

node_modules/
.env


Initial folder structure:

src/
  index.js
  routes/
  controllers/
  models/
  middlewares/
  utils/
tests/
````
>>>>>>> 1f6301e47da71fdb6ddf862c1ed0b9790d4360ea
