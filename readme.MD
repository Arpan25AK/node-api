# Node.js REST API

A simple REST API built with Node.js and Express, following a layered architecture (Model → Repository → Service → Routes).

## Stack
- **Runtime**: Node.js v22
- **Framework**: Express
- **Database**: In-memory array (temporary)

## Project Structure
```
node-api/
├── src/
│   ├── index.js                        ← entry point
│   ├── models/user.js                  ← entity
│   ├── repositories/userRepository.js  ← data access
│   ├── services/userService.js         ← business logic
│   └── routes/userRoutes.js            ← controller
├── .env
└── package.json
```

## Setup
```
npm install
```

Add a `.env` file in the root:
```
PORT=3000
```

Start the server:
```
node src/index.js
```

## Endpoints

| Method | URL | Description |
|---|---|---|
| GET | /users | Get all users |
| GET | /users/:id | Get user by ID |
| GET | /users/email?email= | Get user by email |
| GET | /users/position?position= | Get users by position |
| GET | /users/searchName?name= | Get user by name |
| GET | /users/postAndName?position=&name= | Get users by position and name |
| POST | /users | Create a user |
| PUT | /users/:id | Update a user |
| DELETE | /users/:id | Delete a user |

## POST / PUT Body
```json
{
  "id": 1,
  "name": "John",
  "email": "john@gmail.com",
  "position": "dev"
}
```

## Notes
- Data is stored in memory — it resets on every server restart
- Database layer (Prisma + PostgreSQL) to be added next