# School Management API

A Node.js RESTful API for managing schools and searching for schools by proximity, built with Express, MySQL, and Docker support.

## Features
- Add a new school with name, address, latitude, and longitude
- List schools ordered by distance from a given location
- Input validation using Joi
- Secure HTTP headers with Helmet
- CORS enabled
- Request logging with Morgan

## Prerequisites
- Node.js 18 or later
- MySQL 8+

## Getting Started

### 1. Clone the repository
```sh
git clone https://github.com/SarveshShahane/School-Management-Api.git
cd School-Management
```

### 2. Install dependencies
```sh
npm install
```

### 3. Configure environment variables
Create a `.env` file in the root directory:
```
PORT=3000
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=School_Management
```

### 4. Initialize the database
- Create the database and table using the SQL script:
```sh
mysql -u root -p < sql/init.sql
```

### 5. Start the server
```sh
npm start
```
The server will run on `http://localhost:3000` by default.

## API Endpoints

### Health Check
```
GET /
```

### Add School
```
POST /api/addSchool
Content-Type: application/json
{
  "name": "Green Valley High",
  "address": "123 Park Ave, City",
  "latitude": 19.0760,
  "longitude": 72.8777
}
```

### List Schools by Proximity
```
GET /api/listSchools?lat=19.0760&lng=72.8777
```

## Docker Usage

### Build and Run with Docker
1. (Optional) Add a MySQL service to `docker-compose.yml` if you want to run MySQL in Docker.
2. Build and run the app:
```sh
docker build -t school-management-api .
docker run -p 8080:3000 --env-file .env school-management-api
```

## Project Structure
```
School Management/
├── src/
│   ├── app.js
│   ├── server.js
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   └── validators/
├── sql/
│   └── init.sql
├── .env
├── Dockerfile
├── package.json
└── readme.md
```

## License
MIT
