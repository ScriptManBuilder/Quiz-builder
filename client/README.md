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

### Backend Requirements
- NestJS
- TypeScript
- PostgreSQL or SQLite (via Prisma or Sequelize)

## Getting Started

### Prerequisites
- **Node.js** (v16 or higher) - для работы с React 19
- **npm** or **yarn** package manager

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Create a `.env` file:
   ```
   REACT_APP_API_URL=http://localhost:3001
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

   The app will open at [http://localhost:3000](http://localhost:3000)

## API Endpoints

The frontend expects the following API endpoints:

- `GET /quizzes` - Get all quizzes with titles and question count
- `GET /quizzes/:id` - Get full quiz details including all questions  
- `POST /quizzes` - Create a new quiz
- `DELETE /quizzes/:id` - Delete a quiz

## Question Types

1. **Boolean**: True/False questions with radio buttons
2. **Input**: Short text answer questions
3. **Checkbox**: Multiple choice questions with several correct answers

## Project Structure

```
src/
├── components/     # Reusable components
├── pages/         # Main application pages
├── services/      # API service layer
├── types/         # TypeScript type definitions
└── styles/        # Styled components
```

## Available Scripts

- `npm start` - Runs the app in development mode (React Scripts 5)
- `npm test` - Launches the test runner (Jest with Testing Library)
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## License

This project is part of a technical assessment.
