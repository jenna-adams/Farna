# Farna

Farna is a collection of web services that act as the glue between backend systems and the Eleos Platform.


## Folder and File Summary

It's important to emphasize separation of concerns, which is why each folder/file has a clear job.

| Folder/File    | Responsibility                                      |
| -------------- | --------------------------------------------------- |
| `server.js`    | App entry point, sets up everything                 |
| `middleware/`  | Run before route handlers (e.g., logging, auth)     |
| `routes/`      | Define endpoint URLs and connect to controllers     |
| `controllers/` | Handle incoming HTTP requests (logic for endpoints) |
| `services/`    | Business logic, validation, calculations, DB calls  |
| `models/`      | Database connection and data models/schemas         |
| `queries/`     | (Optional) Organize raw SQL queries separately      |
| `config/`      | Store config settings like DB connection            |
| `.env`         | Securely store environment variables                |


## Need to download

- Node.js
- Nodemon
- Express
- dotenv
- pg

## How to start/close the server locally
- Start: nodemon server.js
- Close: pkill nodemon