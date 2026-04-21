# 🍳 AI Recipe Generator – Backend

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=node.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express-API-000000?style=for-the-badge&logo=express&logoColor=white"/>
  <img src="https://img.shields.io/badge/PostgreSQL-Neon-316192?style=for-the-badge&logo=postgresql&logoColor=white"/>
  <img src="https://img.shields.io/badge/Docker-Container-2496ED?style=for-the-badge&logo=docker&logoColor=white"/>
  <img src="https://img.shields.io/badge/AWS-EC2-orange?style=for-the-badge&logo=amazon-aws&logoColor=white"/>
</p>

<p align="center">
  🚀 Scalable REST API for AI-powered recipe generation with Docker & AWS deployment
</p>

---

## 🌟 Overview

The **AI Recipe Generator Backend** is a production-ready REST API built with Node.js and Express.

It enables users to generate recipes using AI, manage pantry items, plan meals, and maintain shopping lists.

---

## 🏗 Architecture

```text
Frontend (React, S3)
   ↓
REST API (Node.js, Express, Docker on EC2)
   ↓
Neon PostgreSQL
```

### 🐳 Docker Deployment Architecture

## ![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?style=for-the-badge&logo=docker&logoColor=white)

## 🛠 Tech Stack

- ⚙️ Backend: Node.js, Express.js
- 🗄️ Database: PostgreSQL (Neon)
- 🔐 Auth: JWT
- ☁️ Cloud: AWS EC2
- 🐳 DevOps: Docker
- 🤖 AI: Gemini API

---

## 🚀 Features

- 🔐 JWT-based authentication
- 🤖 AI recipe generation
- 🥫 Pantry management
- 📅 Meal planning
- 🛒 Shopping list generation
- ⚡ Scalable REST API
- 🐳 Dockerised deployment

---

## 📡 API Endpoints

### 🔐 Auth

- POST `/api/auth/register`
- POST `/api/auth/login`

### 🤖 Recipes

- POST `/api/recipes/generate`
- POST `/api/recipes`
- GET `/api/recipes`

### 🥫 Pantry

- GET `/api/pantry`
- POST `/api/pantry`
- PUT `/api/pantry/:id`
- DELETE `/api/pantry/:id`

### 📅 Meal Plans

- GET `/api/meal-plans`
- POST `/api/meal-plans`

### 🛒 Shopping List

- GET `/api/shopping-list`
- POST `/api/shopping-list`

---

## 🔄 API Flow

1. Generate recipe → `/api/recipes/generate`
2. Save recipe → `/api/recipes`
3. Store in Neon DB
4. Fetch recipes → `/api/recipes`

---

## 📬 API Testing (Thunder Client)

Example:

```json
{
  "ingredients": ["rice", "chicken", "spices"]
}
```

---

## 🌐 Live API

http://3.25.50.50:8000

---

## ⚙️ Environment Variables

```env
DATABASE_URL=your_neon_postgresql_connection_string
JWT_SECRET=your_secret_key
GEMINI_API_KEY=your_gemini_api_key
PORT=8000
```

---

## 💻 Run Locally

```bash
npm install
npm start
```

---

## 🐳 Docker Setup

```bash
docker build -t ai-recipe-backend .
docker run -d -p 8000:8000 ...
```

---

## ☁️ Deployment

- AWS EC2
- Docker container
- Neon PostgreSQL

---

## 🔮 Future Improvements

- Rate limiting
- CI/CD
- Monitoring

---

## 👨‍💻 Author

**Sai Chaitanya**

- Sydney, Australia
- Open to opportunities
- LinkedIn / GitHub

---
