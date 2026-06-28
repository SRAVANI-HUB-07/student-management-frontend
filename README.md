# Student Management System – Frontend

A React-based frontend application for the **Student Management System** that provides an intuitive user interface for managing student records and generating AI-powered study recommendations.

The application communicates with the Spring Boot backend using REST APIs and allows users to perform CRUD operations on student records while interacting with AI-generated study plans.

---

# Project Overview

This frontend serves as the presentation layer of the Student Management System. It consumes REST APIs exposed by the Spring Boot backend and provides a responsive interface for users to manage students and generate personalized AI recommendations.

The application demonstrates component-based architecture, state management, service-layer design, and frontend-backend integration.

---

# Features

## Student Management

* View All Students
* Search Students by Name
* Add Student
* Update Student Information
* Delete Student Records

## AI Recommendation

Generate personalized study recommendations by providing:

* Student Name
* Area of Interest
* Skill Level
* Weekly Study Hours

The frontend sends the request to the backend API, which communicates with the OpenAI API and returns an AI-generated recommendation.

---

# Technology Stack

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

# Application Architecture

```text
User
   │
   ▼
React Components
   │
   ▼
Service Layer
   │
   ▼
REST APIs
   │
   ▼
Spring Boot Backend
```

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

* Maintains application state
* Coordinates API requests
* Manages data flow between components

### components/

Contains reusable UI components responsible for rendering the application interface.

### services/

Contains reusable functions that communicate with the backend REST APIs using the Fetch API.

---

# Backend Integration

This frontend communicates with the Student Management System backend through REST APIs.

Example endpoints:

* `GET /students`
* `POST /students`
* `PUT /students/{id}`
* `DELETE /students/{id}`
* `POST /ai/recommendation`

---

# Running the Application

## Clone the Repository

```bash
git clone https://github.com/SRAVANI-HUB-07/student-management-frontend.git
cd student-management-frontend
```

---

## Install Dependencies

```bash
npm install
```

---

## Configure Environment Variables

Create a `.env` file in the project root.

```text
VITE_API_BASE_URL=http://localhost:8080
```

For production, update the value to your deployed backend URL.

---

## Start the Development Server

```bash
npm run dev
```

The application starts on:

```text
http://localhost:5173
```

---

# Related Repository

The complete backend implementation is available here:

https://github.com/SRAVANI-HUB-07/student-management-api

---

# Future Enhancements

* Responsive Design
* Improved Form Validation
* Toast Notifications
* Pagination
* Authentication & Authorization
* Dark Mode
* Enhanced UI/UX

---

# Author

**Sravani Mamidi**

Master of Science in Computer Science

Java • Spring Boot • React • REST APIs • AI Integration
