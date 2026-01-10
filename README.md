# Server - Web Development Project

This is the **Backend (Server-side)** code for the project. It is built using Node.js, Express.js, and MongoDB. It handles secure authentication (Login/Register), data validation, and database connectivity.

## 🛠️ Tech Stack

The following technologies are used in this project:

- **Node.js**: JavaScript Runtime environment.
- **Express.js**: Backend framework for building API routes.
- **MongoDB & Mongoose**: Database and schema modeling.
- **JWT (JSON Web Token)**: For secure authentication and authorization.
- **Bcryptjs**: For securing (hashing) passwords.
- **Zod**: For user input validation (via Middleware).

## 🚀 Features

- **User Registration**: Create new users, hash passwords, and save to database.
- **User Login**: Verify email and password, and generate JWT tokens.
- **Input Validation**: Validate request data using Zod schema (e.g., email format, password length).
- **Middleware Support**: Custom middlewares for error handling and validation.

## ⚙️ Installation & Setup

Follow the steps below to run the server on your local machine:

### 1. Navigate to the folder
Open the terminal and navigate to the server directory:
```bash
cd server
```

### 2. Dependencies Install karein
Saari required libraries install karne ke liye:
```bash
npm install
```

### 3. Environment Variables Set karein
`server` folder ke andar ek `.env` file banayein aur neeche di gayi values add karein (apne hisaab se values change karein):

```env
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/your_db_name
JWT_SECRET_KEY=your_super_secret_key_here
```

### 4. Server Run karein
Development mode mein server start karne ke liye:
```bash
npm run dev
```
Ya production start ke liye:
```bash
npm start
```

## 🔗 API Endpoints

| Method | Endpoint             | Description                          |
| :----- | :------------------- | :----------------------------------- |
| GET    | `/api/auth/`         | Server check (Home route)            |
| POST   | `/api/auth/register` | Naya user register karein            |
| POST   | `/api/auth/login`    | User login aur Token generate karein |
| POST   | `/api/form/contact`  | Contact form submit karein           |

---
Created with ❤️ by Sumit