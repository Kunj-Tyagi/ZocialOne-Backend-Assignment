# ZocialOne - Complaint Management System

Node.js + Express + PostgreSQL complaint management system.

## 🚀 Quick Start

```bash
cd "ZocialOne Assignment"
npm install
.\setup-postgres.bat
npm start
```

Server: `http://localhost:3000`

---

## ⚙️ Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Create Database
```bash
.\setup-postgres.bat
```

### 3. Configure .env
```env
PORT=3000
DB_NAME=complaint_system
DB_USER=postgres
DB_PASSWORD=postgres
JWT_SECRET=your-secret-key
```

### 4. Start Server
```bash
npm start
```

---

## 📡 API Endpoints

| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/api/register` | Register user |
| POST | `/api/login` | Login (returns token) |
| GET | `/api/user/details` | Get user profile |
| POST | `/api/complaints` | Create complaint |
| PATCH | `/api/complaints/:id/status` | Update status |
| GET | `/api/complaints/:id/metrics` | Get metrics |
| GET | `/health` | Health check |

---


---

## ✨ Features

✅ User registration & JWT login  
✅ Complaint management with status tracking  
✅ Auto notifications on status change  
✅ Time-based metrics  
✅ Input validation & error handling  
✅ PostgreSQL + Sequelize ORM  
✅ Scheduled tasks (cron)  

---

## 💾 Database Tables

| Table | Columns |
|-------|---------|
| Users | id, name, email (unique), password, onboarding_stage, onboarding_complete |
| Complaints | id, complaint_type, status (raised/in_progress/waiting_on_user/resolved/closed), status_updated_at, meta (JSONB), UserId |
| Notifications | id, title, body, is_sent, UserId |

---

## 📁 Project Structure

```
src/
├── app.js, server.js
├── config/ → db.js, env.js, cron.js
├── models/ → User.js, Complaint.js, Notification.js
├── controllers/ → auth, user, complaint controllers
├── services/ → Business logic
├── routes/ → API routes
├── middlewares/ → Auth & error handling
└── utils/ → JWT, password, status validation
```

---

## 🔐 Security

- JWT authentication (7-day expiration)
- bcrypt password hashing
- Input validation
- Error handling middleware
- `.env` for sensitive data (do not commit)

---

## 📚 More Info

- Postman Collection: https://documenter.getpostman.com/view/37282369/2sBXVifpAK

---

## ✅ Checklist

- [ ] Node.js installed
- [ ] PostgreSQL running
- [ ] `npm install` done
- [ ] `.env` configured
- [ ] Database created
- [ ] Server starts: `npm start`
- [ ] Health check: `curl http://localhost:3000/health`

---

**Status:** ✅ Production Ready | **Updated:** Jan 2026 | **Version:** 1.0
