# Trivia-Quiz-
Overview
The Trivia Quiz App is a multi-choice general knowledge game 
Purpose
The goal of this app is to provide an engaging platform for users to:

Prerequisites
To run the app, ensure you have the following installed:

Node.js (v18 or higher)
npm (comes with Node.js)
Docker and Docker Compose (for Docker setup)
Git (to clone the repository)

Project Structure

quiz_frontend/: Next.js frontend
api/: NestJS backend
docker-compose.yml: Defines Docker services for frontend, backend, and MongoDB.

How to Run the Project
The Trivia Quiz App can be run in two ways: locally by installing dependencies or using Docker to manage containers.
Option 1: Running Locally
Frontend

Navigate to the frontend directory:cd quiz_frontend


Install dependencies:npm install


Start the frontend:npm run dev


Open http://localhost:3000 in your browser to access the app.

Backend

Navigate to the backend directory:cd api


Install dependencies:npm install


Start the backend:npm run start:dev


The backend runs on http://localhost:3001 

Note: You’ll need a local MongoDB instance running on mongodb://localhost:27017/quiz-app or update the backend’s MONGODB_URI environment variable.
Option 2: Running with Docker


Ensure you’re in the root directory (where docker-compose.yml is located).
Build and start the containers:docker compose up --build -d


This starts three containers:
Frontend (quiz_frontend): http://localhost:3000
Backend (api): http://localhost:3001
MongoDB: Port 27018 (mapped to 27017 internally)




Open http://localhost:3000 to start playing the quiz.
To stop the containers and remove them:docker compose down


Add -v to remove MongoDB data: docker compose down -v.


Contributing
Feel free to fork the repository, make improvements, and submit pull requests. Report issues or suggest features via the GitHub Issues page.
License
This project is licensed under the MIT License.
