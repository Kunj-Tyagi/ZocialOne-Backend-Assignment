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

## 🧪 Quick Test

```powershell
# Register
$reg = Invoke-WebRequest -Uri "http://localhost:3000/api/register" -Method POST `
  -ContentType "application/json" `
  -Body (@{name="User";email="test@test.com";password="Pass123"} | ConvertTo-Json) -UseBasicParsing
$token = ($reg.Content | ConvertFrom-Json).token

# Create Complaint
Invoke-WebRequest -Uri "http://localhost:3000/api/complaints" -Method POST `
  -ContentType "application/json" `
  -Headers @{"Authorization"="Bearer $token"} `
  -Body (@{complaint_type="service_issue";meta=@{desc="Test"}} | ConvertTo-Json) -UseBasicParsing

# Get Details
Invoke-WebRequest -Uri "http://localhost:3000/api/user/details" `
  -Headers @{"Authorization"="Bearer $token"} -UseBasicParsing
```

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

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| PostgreSQL connection error | Start PostgreSQL service: `Get-Service postgresql-x64-* \| Start-Service` |
| Database doesn't exist | Run: `.\setup-postgres.bat` |
| Port 3000 already in use | Change `PORT` in `.env` |
| Invalid token | Ensure token is copied correctly and not expired |

---

## 📚 More Info

- [API Testing](API_TESTING_REPORT.md)
- [Test Data](TEST_DATA.md)
- [API Tests Guide](API_TESTS.md)

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
