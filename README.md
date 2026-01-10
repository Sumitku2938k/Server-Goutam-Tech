# Server - Web Development Project

Yeh is project ka **Backend (Server-side)** code hai. Isse Node.js, Express.js aur MongoDB ka use karke banaya gaya hai. Isme secure authentication (Login/Register), data validation, aur database connectivity handle ki gayi hai.

## 🛠️ Tech Stack

Is project mein neeche di gayi technologies use ki gayi hain:

- **Node.js**: JavaScript Runtime environment.
- **Express.js**: Backend framework API routes banane ke liye.
- **MongoDB & Mongoose**: Database aur schema modeling ke liye.
- **JWT (JSON Web Token)**: Secure authentication aur authorization ke liye.
- **Bcryptjs**: Passwords ko secure (hash) karne ke liye.
- **Zod**: User input validation ke liye (Middleware ke through).

## 🚀 Features

- **User Registration**: Naya user create karna, password ko hash karke save karna.
- **User Login**: Email aur password verify karna aur JWT token generate karna.
- **Input Validation**: Zod schema ka use karke request data ko validate karna (jaise email format, password length).
- **Middleware Support**: Error handling aur validation ke liye custom middlewares.

## ⚙️ Installation & Setup

Apne local machine par server run karne ke liye neeche diye gaye steps follow karein:

### 1. Folder mein jayein
Terminal open karein aur server directory mein navigate karein:
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