# ⚡ Laravel React Starter

A clean, full-stack starter kit combining **Laravel** (backend API) and **React** (frontend SPA) — ready to clone and build on.

> **Repository:** [github.com/rashedsmiya/Laravel-React-Staring](https://github.com/rashedsmiya/Laravel-React-Staring)

---

## Table of Contents

- [About](#about)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the App](#running-the-app)
- [Build for Production](#build-for-production)
- [API Overview](#api-overview)
- [Contributing](#contributing)
- [License](#license)

---

## About

**Laravel React Starter** is a boilerplate project that wires up a Laravel REST API backend with a React frontend — giving you a solid foundation to start building full-stack web applications without the repetitive setup work.

---

## Tech Stack

| Layer      | Technology                        |
|------------|-----------------------------------|
| Backend    | PHP 8.x / Laravel                 |
| Frontend   | React.js / Vite                   |
| Styling    | Tailwind CSS                      |
| Auth       | Laravel Sanctum / Breeze          |
| Database   | MySQL                             |
| API        | RESTful JSON API                  |

---

## Project Structure

```
Laravel-React-Staring/
├── app/                  # Laravel application logic
├── resources/
│   └── js/               # React components & pages
├── routes/
│   ├── api.php           # API routes
│   └── web.php           # Web routes
├── database/
│   ├── migrations/       # Database migrations
│   └── seeders/          # Database seeders
├── public/               # Public assets
├── .env.example          # Environment config template
├── package.json          # Node dependencies
└── composer.json         # PHP dependencies
```

---

## Prerequisites

Make sure the following are installed on your machine:

- **PHP** >= 8.1
- **Composer**
- **Node.js** >= 18.x & **npm**
- **MySQL** (or compatible database)

---

## Installation

```bash
# 1. Clone the repository
git clone https://github.com/rashedsmiya/Laravel-React-Staring.git
cd Laravel-React-Staring

# 2. Install PHP dependencies
composer install

# 3. Install Node dependencies
npm install

# 4. Copy environment file
cp .env.example .env

# 5. Generate application key
php artisan key:generate
```

---

## Configuration

Open the `.env` file and update the following values:

```env
APP_NAME="Laravel React Starter"
APP_URL=http://localhost:8000

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel_react
DB_USERNAME=your_db_user
DB_PASSWORD=your_db_password
```

---

## Running the App

### 1. Set up the database

```bash
php artisan migrate --seed
```

### 2. Start the Laravel backend

```bash
php artisan serve
```

> Runs at `http://localhost:8000`

### 3. Start the React frontend (in a separate terminal)

```bash
npm run dev
```

> Runs at `http://localhost:5173`

---

## Build for Production

```bash
# Build frontend assets
npm run build

# Cache Laravel config & routes
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

---

## API Overview

| Method | Endpoint          | Description            |
|--------|-------------------|------------------------|
| POST   | `/api/register`   | Register a new user    |
| POST   | `/api/login`      | Log in and get token   |
| POST   | `/api/logout`     | Log out                |
| GET    | `/api/user`       | Get authenticated user |

> All protected routes require a Bearer token in the `Authorization` header.

---

## Contributing

Contributions are welcome! Here's how to get started:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/my-feature`
3. Make your changes and commit: `git commit -m "Add my feature"`
4. Push to your branch: `git push origin feature/my-feature`
5. Open a Pull Request

Please make sure your code follows the existing style and all tests pass before submitting.

---

## License

This project is open-sourced under the [MIT License](LICENSE).

---

<p align="center">Made with ❤️ by <a href="https://github.com/rashedsmiya">rashedsmiya</a></p>
