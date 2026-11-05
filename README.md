# 🍳 AI Recipe Generator – Backend

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=node.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express-API-000000?style=for-the-badge&logo=express&logoColor=white"/>
  <img src="https://img.shields.io/badge/PostgreSQL-Neon-316192?style=for-the-badge&logo=postgresql&logoColor=white"/>
  <img src="https://img.shields.io/badge/Docker-Container-2496ED?style=for-the-badge&logo=docker&logoColor=white"/>
  <img src="https://img.shields.io/badge/AWS-EC2-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white"/>
</p>

<p align="center">
  🚀 Scalable REST API for AI-powered recipe generation, deployed with Docker on AWS EC2
</p>

---

## 🌟 Overview

The **AI Recipe Generator Backend** is a production-ready REST API built with **Node.js** and **Express**.

It enables users to:

- Generate recipes using AI (Gemini API)
- Manage pantry items
- Plan meals
- Maintain shopping lists

The application is fully deployed on AWS EC2 using Docker and integrates with a cloud-hosted PostgreSQL database (Neon).

---

## 🏗 Architecture

```text
Frontend (React - AWS S3)
        ↓
REST API (Node.js, Express - Docker on EC2)
        ↓
Neon PostgreSQL Database
```

---

## 🐳 Docker Deployment Architecture

```text
User (Browser)
     ↓
Frontend (React - AWS S3)
     ↓
HTTP Request
     ↓
Docker Container (AWS EC2)
     ↓
Node.js + Express API
     ↓
Neon PostgreSQL Database
```

---

## 🛠 Tech Stack

- ⚙️ Backend: Node.js, Express.js
- 🗄️ Database: PostgreSQL (Neon)
- 🔐 Authentication: JWT
- ☁️ Cloud: AWS EC2
- 🐳 DevOps: Docker
- 🤖 AI Integration: Gemini API

---

## 🚀 Features

- 🔐 JWT-based authentication
- 🤖 AI-powered recipe generation
- 🥫 Pantry management system
- 📅 Meal planning functionality
- 🛒 Shopping list generation
- ⚡ Scalable REST API architecture
- 🐳 Containerised deployment using Docker

---

## 📡 API Endpoints

### 🔐 Authentication

- `POST /api/auth/register`
- `POST /api/auth/login`

### 🤖 Recipes

- `POST /api/recipes/generate`
- `POST /api/recipes`
- `GET /api/recipes`

### 🥫 Pantry

- `GET /api/pantry`
- `POST /api/pantry`
- `PUT /api/pantry/:id`
- `DELETE /api/pantry/:id`

### 📅 Meal Plans

- `GET /api/meal-plans`
- `POST /api/meal-plans`

### 🛒 Shopping List

- `GET /api/shopping-list`
- `POST /api/shopping-list`

---

## 🔄 API Flow

1. Generate recipe → `/api/recipes/generate`
2. Save recipe → `/api/recipes`
3. Store in Neon PostgreSQL
4. Fetch recipes → `/api/recipes`

---

## 📬 API Testing (Thunder Client)

Example request:

```json
{
  "name": "Simple Tomato Pasta",
  "description": "Quick and delicious pasta made with fresh tomatoes and garlic",
  "cuisine_type": "Italian",
  "difficulty": "easy",
  "prep_time": 10,
  "cook_time": 20,
  "servings": 2,
  "ingredients": [
    {
      "name": "Pasta",
      "quantity": 200,
      "unit": "grams",
      "category": "Grains"
    }
  ],
  "instructions": ["Boil pasta", "Prepare sauce", "Mix and serve"]
}
```

---

## Deployment Status

The application was previously deployed on **Amazon Web Services (AWS)** using an EC2 instance.

The AWS deployment has since been decommissioned to avoid ongoing cloud infrastructure costs. The EC2 instance and associated hosting resources have been removed.

The project source code remains available in this repository. Although the live demo is currently unavailable, you can explore the implementation, application structure, and features by reviewing the source code.

**Note:** The application was developed and deployed successfully. Its hosting was discontinued as a cost-management decision, not because of a technical issue.

## 🎥 Project Demonstration

Watch the full application walkthrough, showcasing the AI recipe generation, pantry management, meal planning, shopping list functionality and full-stack architecture.

[![AI Recipe Generator – Full-Stack PERN Application](https://img.youtube.com/vi/Qm67_6JX5Wg/0.jpg)](https://youtu.be/Qm67_6JX5Wg)

[▶ Watch the Full Demo on YouTube](https://youtu.be/Qm67_6JX5Wg)

### AWS Infrastructure Costs

During deployment and operation, the following AWS resources contributed to infrastructure costs:

- **Amazon EC2:** Virtual machine compute charges for hosting the backend application.
- **Amazon EBS:** Storage charges for the EC2 instance's root volume.
- **EBS Snapshots:** Charges for storing EC2 volume backups.
- **Public IPv4 Address:** Charges associated with public IPv4 address usage.
- **Amazon VPC:** Networking-related public IPv4 usage.

These resources were reviewed and removed where applicable to prevent further hosting expenses.

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
# Build Docker image
docker build -t ai-recipe-backend .

# Run container with environment variables
docker run -d -p 8000:8000 --env-file .env ai-recipe-backend
```

---

## ☁️ Deployment

- AWS EC2 (Backend Hosting)
- Docker (Containerisation)
- Neon PostgreSQL (Cloud Database)

---

## 🔮 Future Improvements

- API rate limiting
- CI/CD pipeline (GitHub Actions)
- Monitoring & logging
- Enhanced AI prompt optimisation

---

## 👨‍💻 Author

**Sai Chaitanya**

- 📍 Sydney, Australia
- 💼 Open to opportunities

---
