# Student Management System (TypeScript Learning Project)

This is a simple **Student Management System** built with **Express**, **MongoDB**, and **TypeScript**. It's designed to help you learn TypeScript while building a practical backend application.

---

## Features
- **CRUD Operations**: Create, Read, Update, and Delete students.
- **TypeScript**: Strongly typed models, interfaces, and services.
- **Asynchronous Operations**: Uses `async/await` for database operations.
- **Error Handling**: Proper error handling for all API endpoints.

---

## Prerequisites
Before running the project, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)

---

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/student-management-ts.git
cd student-management-ts

```

### 2. Install Dependencies
bash
Copy
npm install
3. Set Up Environment Variables
Create a .env file in the root directory and add the following:

```bash
MONGO_URI=mongodb://localhost:27017/student_db
PORT=3000
```
### 4. Run the Project
Development Mode (with hot-reload)
```bash
npm run dev
```
This uses ts-node and nodemon to automatically restart the server when changes are made.

Production Mode
Compile TypeScript to JavaScript:

```bash

npm run build
```
Start the server:

```bash

npm start
```
