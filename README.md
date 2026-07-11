# Task Management API

A simple RESTful Task Management API built with **NestJS**, **TypeORM**, and **PostgreSQL** following a clean and scalable architecture.

---

## Tech Stack

- NestJS
- TypeScript
- PostgreSQL
- TypeORM
- Swagger (OpenAPI)
- Class Validator
- ESLint + Prettier

---

# Project Structure

```
src
├── common
│   ├── filters
│   │   └── http-exception.filter.ts
│   ├── interceptors
│   │   └── response.interceptor.ts
│   └── interfaces
│
├── config
│   └── database.config.ts
│
├── database
│   └── migrations
│
├── modules
│   └── tasks
│       ├── dto
│       ├── entities
│       ├── tasks.controller.ts
│       ├── tasks.service.ts
│       └── tasks.module.ts
│
├── app.module.ts
└── main.ts
```

---

# Architecture

The application follows a layered architecture.

```
Client
   │
   ▼
Controller
   │
   ▼
Service
   │
   ▼
Repository (TypeORM)
   │
   ▼
PostgreSQL
```

### Controller

Responsible for:

- Receiving HTTP requests
- Validating request parameters
- Returning API responses

### Service

Responsible for:

- Business logic
- Calling repository methods
- Throwing application exceptions

### Entity

Represents the database table.

### DTO

Defines request validation rules using `class-validator`.

---

# Database Schema

## Table: tasks

| Column | Type | Description |
|----------|------|-------------|
| id | Integer | Primary Key (Auto Increment) |
| title | VARCHAR(255) | Task title |
| description | TEXT | Task description |
| status | BOOLEAN | Task completion status |
| created_at | TIMESTAMP | Record creation time |
| updated_at | TIMESTAMP | Last update time |

---

# API Endpoints

| Method | Endpoint | Description |
|----------|----------|-------------|
| POST | `/api/tasks` | Create task |
| GET | `/api/tasks` | Get all tasks |
| GET | `/api/tasks/:id` | Get task by ID |
| PATCH | `/api/tasks/:id` | Update task |
| DELETE | `/api/tasks/:id` | Delete task |

---

# Response Format

Every successful response follows the same structure.

```json
{
  "status": true,
  "message": "Request successful.",
  "data": {}
}
```

Example:

```json
{
  "status": true,
  "message": "Task created successfully.",
  "data": {
    "id": 1,
    "title": "Learn NestJS",
    "description": "Complete CRUD API",
    "status": false
  }
}
```

---

# Error Response

All exceptions are handled by a global exception filter.

```json
{
  "status": false,
  "message": "Task not found.",
  "data": null
}
```

Validation example:

```json
{
  "status": false,
  "message": "title should not be empty",
  "data": null
}
```

---

# Swagger Documentation

Swagger UI is available at:

```
http://localhost:3000/docs
```

---

# Environment Variables

Create a `.env` file in the project root.

```env
PORT=3000

DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=iq_tech_task_db
```

---

# Installation

Install dependencies

```bash
npm install
```

Start development server

```bash
npm run start:dev
```

Build project

```bash
npm run build
```

---

# Database Migrations

Generate migration

```bash
npm run migration:generate
```

Run migrations

```bash
npm run migration:run
```

Revert migration

```bash
npm run migration:revert
```

---

# Design Decisions

- Layered architecture (Controller → Service → Repository)
- TypeORM for ORM and database access
- PostgreSQL as the relational database
- DTO validation using `class-validator`
- Global response interceptor for consistent API responses
- Global exception filter for standardized error handling
- Swagger/OpenAPI for API documentation
- Database versioning with TypeORM migrations
- Automatic request validation using `ValidationPipe`

---