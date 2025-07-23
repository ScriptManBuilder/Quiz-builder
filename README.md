
# Quiz Builder

A full-stack quiz creation platform where users can create custom quizzes with various types of questions.

## Features

- Create quizzes with multiple question types (Boolean, Input, Checkbox)
- View all created quizzes in a dashboard
- View detailed quiz information
- Delete quizzes
- Mobile responsive design

## Tech Stack

### Frontend
- **React 19** with TypeScript
- **React Router DOM 7** for navigation
- **React Hook Form 7** with **Zod 4** validation
- **styled-components 6** for styling
- **Axios 1** for API calls
- **Create React App 5** for project setup

### Development Tools
- **TypeScript 4.9**
- **ESLint** (react-app config)
- **Testing Library** (React, Jest DOM, User Event)

### Backend
- **NestJS** with **TypeScript**
- **PostgreSQL** or **SQLite** (via Prisma or Sequelize)
- **TypeORM** for database operations
- **Class-validator** for data validation

---

# Frontend Setup

## Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn**

## Installation

1. Install dependencies:
```bash
cd frontend
npm install
```

2. Set up environment variables:
Create a `.env` file:
```
REACT_APP_API_URL=http://localhost:3001
```

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── components/
├── pages/
├── services/
├── types/
└── styles/
```

## Available Scripts

- `npm start` - Development mode
- `npm test` - Test runner
- `npm run build` - Production build

---

# Backend Setup

## Prerequisites

- **Node.js** (v18+)
- **PostgreSQL** (v12+)
- **npm** or **yarn**

## Installation

1. Install dependencies:
```bash
cd backend
npm install
```

2. Database Setup

Option 1: Using CLI
```bash
psql -U postgres -h localhost
CREATE DATABASE quizbuilder;
\q
```

Option 2: Using pgAdmin (GUI)

3. Set up `.env` file:

```
DATABASE_URL=postgres://postgres:your_password@localhost:5432/quizbuilder
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=your_password
DB_DATABASE=quizbuilder
PORT=3001
```

4. Start the server:
```bash
npm run start:dev
```

## Project Structure

```
src/
├── controllers/
├── services/
├── entities/
├── dto/
├── modules/
├── app.module.ts
└── main.ts
```

## Available Scripts

```bash
npm run start:dev
npm run start:prod
npm run build
npm run test
npm run lint
npm run format
```

---

# API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /quizzes       | Get all quizzes |
| GET    | /quizzes/:id   | Get single quiz |
| POST   | /quizzes       | Create quiz     |
| DELETE | /quizzes/:id   | Delete quiz     |

---

# Question Types

- Boolean
- Input
- Checkbox

---

# Troubleshooting

- Ensure PostgreSQL is running
- Verify .env credentials
- Use `npx kill-port 3001` if port is busy

---

# License

MIT
