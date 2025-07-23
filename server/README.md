# Quiz Builder Backend

A NestJS-based REST API for creating and managing quizzes with multiple question types.

## 🚀 Tech Stack

- **Node.js** with **NestJS** framework
- **TypeScript** for type safety
- **PostgreSQL** database
- **TypeORM** for database operations
- **Class-validator** for data validation

## 🗄️ Database Schema

The application uses two main entities:

### Quiz Entity
- `id` (UUID) - Primary key
- `title` (string) - Quiz title
- `createdAt` (timestamp) - Creation date
- `updatedAt` (timestamp) - Last update date

### Question Entity
- `id` (UUID) - Primary key
- `type` (enum) - Question type: `boolean`, `input`, `checkbox`
- `question` (text) - Question text
- `correctAnswer` (text) - For boolean/input types
- `options` (json) - For checkbox type
- `correctAnswers` (json) - For checkbox type
- `quizId` (UUID) - Foreign key to Quiz

## 📋 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/quizzes` | Get all quizzes (with title and question count) |
| `GET` | `/quizzes/:id` | Get quiz details with all questions |
| `POST` | `/quizzes` | Create a new quiz |
| `DELETE` | `/quizzes/:id` | Delete a quiz |

## 🛠️ Setup Instructions

### Prerequisites

- Node.js (v18+ recommended)
- PostgreSQL (v12+ recommended)
- npm or yarn package manager

### 1. Install Dependencies

```bash
cd "c:\Main Projects\Projects Sites\QuizBuilder\server"
npm install
```

### 2. Database Setup

#### Option 1: Using PostgreSQL CLI
```bash
# Connect to PostgreSQL
psql -U postgres -h localhost

# Create database
CREATE DATABASE quizbuilder;

# Exit psql
\q
```

#### Option 2: Using pgAdmin
1. Open pgAdmin
2. Connect to your PostgreSQL server
3. Right-click on "Databases" → "Create" → "Database"
4. Name: `quizbuilder`
5. Owner: `postgres`
6. Click "Save"

### 3. Environment Configuration

Create a `.env` file in the `server` directory:

```bash
# Database Configuration
DATABASE_URL=postgres://postgres:Quanta12j71d@localhost:5432/quizbuilder
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=Quanta12j71d
DB_DATABASE=quizbuilder

# Server Configuration
PORT=3001
```

**⚠️ Important:** Replace `Quanta12j71d` with your actual PostgreSQL password if different.

### 4. Start the Application

```bash
# Development mode (with hot reload)
npm run start:dev

# NOTE: Use correct command, not npm start run:dev

# Production mode
npm run start:prod

# Build only
npm run build
```

The API will be available at: `http://localhost:3001`

You should see output like:
```
🚀 Quiz Builder API is running on http://localhost:3001
[RouterExplorer] Mapped {/quizzes, GET} route
[RouterExplorer] Mapped {/quizzes/:id, GET} route  
[RouterExplorer] Mapped {/quizzes, POST} route
[RouterExplorer] Mapped {/quizzes/:id, DELETE} route
```

### 5. Verify Installation

Open your browser and visit:
- `http://localhost:3001` - Should show: "🎯 Quiz Builder API - Ready to serve quizzes!"
- `http://localhost:3001/health` - Should show API health status with timestamp
- `http://localhost:3001/quizzes` - Should return empty array `[]`

The database tables `quizzes` and `questions` will be created automatically on first run.

## 🧪 Testing the API

### Create a Sample Quiz

```bash
curl -X POST http://localhost:3001/quizzes \
  -H "Content-Type: application/json" \
  -d '{
    "title": "JavaScript Basics Quiz",
    "questions": [
      {
        "type": "boolean",
        "question": "JavaScript is a programming language?",
        "correctAnswer": true
      },
      {
        "type": "input",
        "question": "What does JS stand for?",
        "correctAnswer": "JavaScript"
      },
      {
        "type": "checkbox",
        "question": "Which are JavaScript frameworks?",
        "options": ["React", "Angular", "PHP", "Vue"],
        "correctAnswers": ["React", "Angular", "Vue"]
      }
    ]
  }'
```

### Get All Quizzes

```bash
curl http://localhost:3001/quizzes
```

### Get Quiz by ID

```bash
curl http://localhost:3001/quizzes/{quiz-id}
```

### Delete Quiz

```bash
curl -X DELETE http://localhost:3001/quizzes/{quiz-id}
```

## 📝 Question Types

### 1. Boolean (True/False)
```json
{
  "type": "boolean",
  "question": "JavaScript is compiled?",
  "correctAnswer": false
}
```

### 2. Input (Text Answer)
```json
{
  "type": "input",
  "question": "What is the capital of France?",
  "correctAnswer": "Paris"
}
```

### 3. Checkbox (Multiple Choice)
```json
{
  "type": "checkbox",
  "question": "Select programming languages:",
  "options": ["JavaScript", "HTML", "Python", "CSS"],
  "correctAnswers": ["JavaScript", "Python"]
}
```

## 🔧 Development

### Project Structure

```
src/
├── controllers/          # REST API controllers
│   └── quiz.controller.ts
├── services/            # Business logic
│   └── quiz.service.ts
├── entities/            # Database entities
│   ├── quiz.entity.ts
│   └── question.entity.ts
├── dto/                 # Data Transfer Objects
│   ├── create-quiz.dto.ts
│   └── create-question.dto.ts
├── modules/             # NestJS modules
│   └── quiz.module.ts
├── app.module.ts        # Main application module
└── main.ts             # Application entry point
```

### Available Scripts

```bash
# Development
npm run start:dev        # Start with hot reload
npm run start:debug      # Start with debugging

# Production
npm run build           # Build the application
npm run start:prod      # Start production server

# Testing
npm run test            # Run unit tests
npm run test:e2e        # Run end-to-end tests
npm run test:cov        # Run tests with coverage

# Code Quality
npm run lint            # Run ESLint
npm run format          # Format code with Prettier
```

## 🌐 CORS Configuration

The API is configured to accept requests from:
- `http://localhost:3000` (React frontend)
- `http://127.0.0.1:3000`

## 🔒 Database Notes

- **Synchronization**: `synchronize: true` is enabled for development (auto-creates tables)
- **Production**: Set `synchronize: false` and use proper migrations
- **UUID**: All IDs use UUID v4 for better uniqueness
- **Cascading**: Deleting a quiz automatically deletes all its questions

## 🐛 Troubleshooting

### Database Connection Issues
- Verify PostgreSQL is running via pgAdmin or Task Manager
- Check credentials in `.env` file (password: `Quanta12j71d`)
- Ensure database `quizbuilder` exists in pgAdmin
- Test connection: `psql -U postgres -d quizbuilder -c "SELECT 1"`

### Port Already in Use
```bash
# Kill process using port 3001
npx kill-port 3001
```

### Common Startup Errors
- **"database does not exist"**: Create `quizbuilder` database in pgAdmin
- **"npm start run:dev" error**: Use `npm run start:dev` (correct command)
- **TypeORM connection timeout**: Check PostgreSQL service is running

## 📄 License

This project is [MIT licensed](LICENSE).
