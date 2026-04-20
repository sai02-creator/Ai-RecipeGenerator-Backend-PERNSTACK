# 🍳 AI Recipe Generator – Backend

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=node.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express-API-000000?style=for-the-badge&logo=express&logoColor=white"/>
  <img src="https://img.shields.io/badge/PostgreSQL-Database-316192?style=for-the-badge&logo=postgresql&logoColor=white"/>
  <img src="https://img.shields.io/badge/Docker-Container-2496ED?style=for-the-badge&logo=docker&logoColor=white"/>
  <img src="https://img.shields.io/badge/AWS-EC2-orange?style=for-the-badge&logo=amazon-aws&logoColor=white"/>
</p>

<p align="center">
  🚀 Scalable REST API for AI-powered recipe generation deployed using Docker & AWS
</p>

---

## 🌟 Overview

The **AI Recipe Generator Backend** is a production-ready REST API that powers a full-stack application for generating recipes using AI.

It handles authentication, user data, pantry management, meal planning, and integrates with AI services for dynamic recipe generation.

---

## 🏗 Architecture

![Image](https://images.openai.com/static-rsc-4/FbvJVCD6UuI--NrI44r5KNu7jCqsSHjK6zvmOqGvJr5jMoVYC9TEUXni0O0XoO2HMusMB0lHoL9_Ygl9o2Gg-nUSjbaqzPYfNJF3JYGOwm_v3WUAoM9BV90bAIjV9XS1ZoabB0cDoFWfBQYhkXeA27lE72AM4thYOxxKkVxEiot7_6fWddW1UoSC6N-L2TPe?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/vjyHxfLo-T4ryrcbi0hc3i48zVXD-QNEY5cNfz1J3qG7yeSrVqdBedIJxqLI0f5b0Bm4kkr0UPS-Y_9fNyJ4R0dRfbrRbjdpMB6JWoNfetIC5KfTTaHkhN89lq_n6_sheLq6J_epLx_0eRzWix1be3AoKxzcgc83jvWMlzbMqHj6x0w74JZgpuL0ngPbiftX?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/GG38kpvlZ4lXpan6iweD-Z57qGAm83TRNpu8PcV2MDzdmQI-Iry6jDMGNoZ_Rrn5W3CVYAiejz7PFojRFr37a0ufHT869zuRfXfNTutfh5a0E_3gzLvonhpc4EejJRXP-9-AcS65Hiz03vvOCMg2QG2QbBV9n5G2MEcs9XH_Nu-24EzCq5drEBee2Gr3KKl7?purpose=fullsize)

```text
Frontend (S3) → Backend (Docker on EC2) → Database (Neon PostgreSQL)
```

---

## 🚀 Features

- 🔐 JWT-based Authentication & Authorization
- 🤖 AI-powered Recipe Generation
- 🥫 Pantry Management APIs
- 📅 Meal Planning System
- 🛒 Shopping List Management
- ⚡ Scalable REST API architecture

---

## 🛠 Tech Stack

**Backend:** Node.js, Express.js  
**Database:** PostgreSQL (Neon)  
**Authentication:** JWT  
**DevOps:** Docker, AWS EC2  
**AI Integration:** Gemini API

---

## 🌐 Live API

```bash
http://3.25.50.50:8000
```

---

## ⚙️ Environment Variables

Create a `.env` file:

```env
DATABASE_URL=your_neon_postgresql_connection_string
JWT_SECRET=your_secret_key
PORT=8000
```

👉 Use `.env.example` for reference (recommended)

---

## 💻 Run Locally

```bash
npm install
npm start
```

---

## 🐳 Docker Setup

### 🔨 Build Image

```bash
docker build -t ai-recipe-backend .
```

### ▶️ Run Container

```bash
docker run -d -p 8000:8000 \
-e DATABASE_URL="your_neon_connection_string" \
-e JWT_SECRET="your_secret_key" \
--name ai-backend \
ai-recipe-backend
```

### 📌 Notes

- Backend is fully containerised using Docker
- Ensures consistent deployment across environments

---

## 📡 API Endpoints

| Feature       | Endpoint             |
| ------------- | -------------------- |
| Auth          | `/api/auth`          |
| Users         | `/api/users`         |
| Pantry        | `/api/pantry`        |
| Recipes       | `/api/recipes`       |
| Meal Plans    | `/api/meal-plans`    |
| Shopping List | `/api/shopping-list` |

---

## ☁️ Deployment

- 🚀 Backend hosted on AWS EC2
- 🐳 Containerised using Docker
- 🗄 Database hosted on Neon PostgreSQL
- 🔗 Connected to S3-hosted frontend

---

## 🧠 Key Learnings

- Designing scalable REST APIs
- Containerising applications with Docker
- Deploying full-stack apps on AWS
- Managing environment variables securely
- Integrating AI services into web applications

---

## 👨‍💻 Author

**Sai Chaitanya**

- 🌐 Sydney, Australia
- 💼 Open to opportunities

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub!
