Interior Design Landing Page

## 📌 Project Overview

This project is a modern and responsive Interior Design Landing Page built based on the provided Figma design. It includes a dynamic product section where data is fetched from a backend API instead of using static content.

The application demonstrates full-stack development using React for the frontend and Laravel for the backend.


Tech Stack

**Frontend**

* React (Vite)
* Tailwind CSS

**Backend**

* Laravel (REST API)

**Database**

* MySQL

---

Features

* Fully responsive design (Mobile, Tablet, Desktop)
* Modern UI based on Panto furniture design
* Product section with horizontal scrolling
* Category-based filtering (Chair, Beds, Sofa, Lamp)
* Dynamic data fetching from backend API
* Product CRUD functionality:

  * Create products
  * View products
  * Update products
  * Delete products

---

Installation & Setup

### 1. Clone the repository

```bash
git clone <your-repo-link>
cd <project-folder>
```

---

### 2. Backend Setup (Laravel)

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
```

### Configure database in `.env`

```env
DB_DATABASE=interior_db
DB_USERNAME=root
DB_PASSWORD=
```

### Run migrations

```bash
php artisan migrate
```

### Start backend server

```bash
php artisan serve
```

Backend will run on:

```
http://127.0.0.1:8000
```

---

### 3. Frontend Setup (React)

```bash
cd interior-app
npm install
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---


Project Structure

* `/backend` → Laravel API
* `/interior-app` → React frontend
* `/pictures` → Screenshots of UI

---

Screenshots

Screenshots of the UI are included in the `pictures/` folder.

---

Notes

* Images are stored in the frontend `public/images` folder.
* API is connected using `fetch()` in React.
* Category filtering is handled on the frontend.

---

Status

✔ Frontend completed
✔ Backend API completed
✔ CRUD operations working
✔ Responsive design implemented

