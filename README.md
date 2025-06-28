# Auth Backend

A simple authentication backend built with Node.js, Express, and TypeScript. This project provides user registration, login, and authentication endpoints, using schema validation and JWT-based authentication.

## Features

- User registration and login endpoints
- Request validation using schemas
- JWT authentication middleware
- Modular code structure (controllers, middleware, models, routes, schemas)
- TypeScript for type safety

## Project Structure

```
src/
  config/
    database.ts           # Database configuration (if any)
  controllers/
    authController.ts     # Handles registration, login, and user info
  middleware/
    validateRequest.ts    # Validates request bodies against schemas
    authenticate.ts       # JWT authentication middleware
  models/
    user.model.ts         # User model definition
  routes/
    authRoutes.ts         # Authentication routes
  schemas/
    auth.schema.ts        # Validation schemas for auth
index.ts                  # App entry point
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd authBackend
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Running the Server

```sh
npm run dev
# or
npx ts-node src/index.ts
```

### API Endpoints

- `POST /api/auth/register` — Register a new user
  {
  "email": "user@example.com",
  "password": "yourPassword"
  }

- `POST /api/auth/login` — Login and receive a JWT
  {
  "email": "user@example.com",
  "password": "yourPassword"
  }
- `GET /api/auth/me` — Get current user info (requires JWT in Authorization header)
  Authorization: Bearer <JWT token>
- `PATCH /api/admin/reset` — Login and receive a JWT
  {
  "email": "user@example.com",
  "resetEmail": "resetemail@gmail.com",
  "resetPassword": "new password"
  }

### Request Validation

All incoming requests are validated using Zod schemas before reaching the controller logic.

### Authentication

JWT tokens are used for authentication. Pass the token in the `Authorization: Bearer <token>` header for protected routes.

## License

MIT
