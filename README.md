# Student Management Frontend

A React-based frontend application for the **Student Management System**. This application provides a user-friendly interface to manage students and interact with AI-powered study plan recommendations by communicating with the Spring Boot backend through REST APIs.

This project was built to understand modern frontend development concepts, component-based architecture, state management, HTTP communication, and frontend-backend integration.

---

# Project Purpose

The purpose of this project is to learn how a React frontend communicates with a backend REST API while following good software engineering practices.

This project focuses on understanding:

* React Component Architecture
* React State Management
* Props
* Event Handling
* Fetch API
* HTTP Requests & Responses
* JSON Serialization & Deserialization
* Component Reusability
* Service Layer Design
* Frontend ↔ Backend Communication

This application works together with the **Student Management API** backend.

---

# Technologies Used

## Frontend

* React
* JavaScript (ES6+)
* Vite
* HTML5
* CSS3

## Communication

* Fetch API
* REST APIs
* JSON

## Development Tools

* Visual Studio Code
* Git
* GitHub

---

# Features

## Student Management

* View All Students
* Search Students
* Add Student
* Update Student
* Delete Student

## AI Study Plan Generator

Generate a personalized four-week study plan by providing:

* Student Name
* Area of Interest
* Skill Level
* Weekly Study Hours

The frontend sends the request to the backend API, which communicates with the OpenAI API and returns an AI-generated study plan.

---

# Project Structure

```text
src
├── components
│   ├── StudentList.jsx
│   ├── StudentForm.jsx
│   ├── SearchStudent.jsx
│   └── AIRecommendation.jsx
│
├── services
│   ├── studentService.js
│   └── aiService.js
│
├── App.jsx
├── App.css
└── main.jsx
```

---

# Component Responsibilities

### App.jsx

Maintains application state, coordinates API calls, and manages data flow between components.

### components/

Contains reusable UI components responsible for rendering different parts of the user interface.

### services/

Contains functions responsible for communicating with the backend REST APIs using the Fetch API.

---

# Backend Integration

This frontend communicates with the **Student Management API** backend using REST APIs.

Example endpoints include:

* `GET /students`
* `POST /students`
* `PUT /students/{id}`
* `DELETE /students/{id}`
* `POST /ai/recommendation`

---

# Running the Application

## 1. Clone the repository

```bash
git clone https://github.com/SRAVANI-HUB-07/student-management-frontend.git
```

## 2. Install dependencies

```bash
npm install
```

## 3. Start the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

Ensure the Spring Boot backend is running on:

```text
http://localhost:8080
```

---

# Future Improvements

* Responsive Design
* Better Form Validation
* Toast Notifications
* Pagination
* Authentication
* Dark Mode
* Improved UI/UX
* Production Deployment

---

# Learning Outcomes

This project strengthened my understanding of:

* React Fundamentals
* Component-Based Architecture
* State Management
* Props
* Fetch API
* HTTP Communication
* JSON Processing
* Service Layer Pattern
* Frontend ↔ Backend Integration
* Git & GitHub Workflow
