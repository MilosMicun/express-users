# Express Users API

**Author:** Milos Mirkovic

This is a simple Node.js project using **Express** to create a basic API for users.  
It demonstrates **GET routes**, **route parameters**, **query parameters**, and a small bonus route for arithmetic operations.

## Routes

### 1. `GET /`

Returns a welcome message.

**Example:**

http://localhost:3002/

makefile
Copy code

**Response:**

Welcome to User API

yaml
Copy code

---

### 2. `GET /users`

Returns a list of all users from `users.json`.

**Example:**

http://localhost:3002/users

pgsql
Copy code

**Response:**

```json
[
  { "id": 1, "name": "Milos", "active": true },
  { "id": 2, "name": "Ana", "active": false },
  { "id": 3, "name": "Marko", "active": true }
]
Query filter: active users
You can filter users by their active status using the query parameter active=true or active=false.

Example:

bash
Copy code
http://localhost:3002/users?active=true
Response:

json
Copy code
[
  { "id": 1, "name": "Milos", "active": true },
  { "id": 3, "name": "Marko", "active": true }
]
3. GET /users/:id
Returns a single user by ID.

Example:

bash
Copy code
http://localhost:3002/users/2
Response:

json
Copy code
{ "id": 2, "name": "Ana", "active": false }
If the user does not exist, returns:

pgsql
Copy code
User not found
4. Bonus: GET /sum
Returns the sum of two query parameters a and b.

Example:

bash
Copy code
http://localhost:3002/sum?a=5&b=10
Response:

json
Copy code
{ "sum": 15 }
If parameters are missing:

mathematica
Copy code
Missing parameters
If parameters are not valid numbers:

nginx
Copy code
Invalid numbers
Setup
Clone the repository:

bash
Copy code
git clone <your-repo-url>
Install dependencies:

bash
Copy code
npm install
Run the server:

bash
Copy code
node index.js
Visit http://localhost:3002 in your browser or use a tool like Postman to test the routes.

Users Data
All user data is stored in users.json:

json
Copy code
[
  { "id": 1, "name": "Milos", "active": true },
  { "id": 2, "name": "Ana", "active": false },
  { "id": 3, "name": "Marko", "active": true }
]
Notes
This project is for practice and learning purposes, focusing on Express GET routes, params, and query parameters.

Future improvements could include POST/PUT/DELETE routes, error handling middleware, or connecting to a real database.

yaml
Copy code
