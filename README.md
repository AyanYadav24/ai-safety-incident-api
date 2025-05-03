
# AI Safety Incident Logging API

This API allows you to log and manage AI safety incidents. It includes various routes for user registration, login, and managing incident logs.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Project Setup](#project-setup)
3. [API Routes](#api-routes)
    - [Register User](#register-user)
    - [Login User](#login-user)
    - [Create Incident](#create-incident)
    - [Get All Incidents](#get-all-incidents)
4. [How to Use](#how-to-use)
    - [Registering a User](#registering-a-user)
    - [Logging in](#logging-in)
    - [Create Incident](#create-incident)
    - [Fetch Incidents](#fetch-incidents)
5. [How to Test the API](#how-to-test-the-api)
6. [License](#license)

## Prerequisites

Before running the project, make sure you have the following installed:

- **Node.js** (version 12 or higher)
- **MongoDB** (you can use MongoDB Atlas or install it locally)

## Project Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AyanYadav24/ai-safety-incident-api.git
   ```

2. **Install dependencies**:
   Navigate into the project folder:
   ```bash
   cd ai-safety-incident-api
   ```

   Install the dependencies:
   ```bash
   npm install
   ```

3. **Setup MongoDB**:
   - If you're using **MongoDB Atlas**, create a cluster and get the connection string.
   - If you're using **local MongoDB**, ensure the MongoDB service is running.

4. **Setup environment variables**:
   Create a `.env` file in the root directory and add the following variables:
   ```env
   MONGO_URI=mongodb://localhost:27017/ai_safety_log  # MongoDB connection string
   JWT_SECRET=your_jwt_secret_key
   ```

5. **Start the server**:
   After setting up, run the server with the following command:
   ```bash
   npm start
   ```

The server will now be running at `http://localhost:5000`.

## API Routes

### 1. Register User  
- **Route:** `POST /api/auth/register`
- **Description:** Registers a new user by providing an email and password.
- **Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```

---

### 2. Login User  
- **Route:** `POST /api/auth/login`
- **Description:** Logs in an existing user and returns a JWT token.
- **Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response:** The server returns a JWT token that you will need to include in headers for protected routes.

---

### 3. Create Incident  
- **Route:** `POST /api/incidents`
- **Description:** Creates a new AI safety incident.
- **Headers:** 
  - **Authorization:** `Bearer <JWT token>`
- **Body:**
  ```json
  {
    "title": "AI Robot Malfunction",
    "description": "Robot failed to identify obstacle",
    "severity": "high"
  }
  ```

---

### 4. Get All Incidents  
- **Route:** `GET /api/incidents`
- **Description:** Retrieves all AI safety incidents.
- **Headers:**
  - **Authorization:** `Bearer <JWT token>`
- **Response:** A list of incidents in JSON format.

---

## How to Use

### Registering a User
- **Method:** `POST`
- **URL:** `http://localhost:5000/api/auth/register`
- **Body (raw JSON):**
```json
{
  "email": "testuser@example.com",
  "password": "password123"
}
```
After a successful registration, you’ll receive a **201 Created** response.

---

### Logging in
- **Method:** `POST`
- **URL:** `http://localhost:5000/api/auth/login`
- **Body (raw JSON):**
```json
{
  "email": "testuser@example.com",
  "password": "password123"
}
```
The response will include a **JWT token** that you'll use for authentication in future requests.

---

### Create Incident
- **Method:** `POST`
- **URL:** `http://localhost:5000/api/incidents`
- **Headers:**
  - Authorization: `Bearer <your_jwt_token_here>`
- **Body (raw JSON):**
```json
{
  "title": "AI System Failure",
  "description": "AI failed to respond to human commands",
  "severity": "high"
}
```
This will create a new incident. The response will contain the newly created incident data.

---

### Fetch Incidents
- **Method:** `GET`
- **URL:** `http://localhost:5000/api/incidents`
- **Headers:**
  - Authorization: `Bearer <your_jwt_token_here>`
- This will fetch all the incidents in your database.

---

## How to Test the API

You can use **Postman** to easily test the API. Import the provided Postman collection to quickly test all the API routes. Each request will be pre-configured for you, including authentication and data handling.

---


