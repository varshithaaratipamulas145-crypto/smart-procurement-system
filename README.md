# 🌾 Smart Procurement System
> *Better Information for a Brighter Tomorrow*

![License](https://img.shields.io/badge/license-MIT-green)
![React](https://img.shields.io/badge/React-18.x-blue)
![Node](https://img.shields.io/badge/Node.js-Express-green)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue)

## 📌 Problem Statement
Agricultural procurement processes often suffer from fragmented information, lack of transparent pricing, and inefficient manual tracking between farmers, administrative staff, and system administrators. 

## 💡 Solution
The **Smart Procurement System** is a responsive, multi-role web platform designed to streamline agricultural procurement workflows. It bridges the gap between field procurement and administrative oversight with real-time data access, secure role-based access control, and a localized, multi-language interface.

## ✨ Key Features
* **Role-Based Access Control:** Custom dashboard views tailored specifically for **Farmers**, **Staff**, and **Admins**.
* **Multi-Language Interface:** Accessible design featuring **English**, **Hindi (हिन्दी)**, and **Telugu (తెలుగు)** support.
* **Responsive UI:** Fully adaptive design optimized for seamless access across mobile devices, tablets, and desktop computers.
* **Secure Authentication:** Integrated JWT/Session management with PostgreSQL storage.

## 🛠️ Tech Stack
* **Frontend:** React.js, Vite, Responsive CSS3
* **Backend:** Node.js, Express.js
* **Database:** PostgreSQL
* **Deployment:** Netlify (Frontend), Render/Railway (Backend)

## ⚙️ Local Setup & Installation

### Prerequisites
* Node.js (v18+)
* PostgreSQL installed locally

### 1. Clone the Repository
git clone [https://github.com/varshithaaratipamulas145-crypto/smart-procurement-system.git](https://github.com/varshithaaratipamulas145-crypto/smart-procurement-system.git)
cd smart-procurement-system

### 2. Frontend Setup

cd my-app
npm install
npm run dev

### 3. Backend Setup
cd ../server
npm install
# Create a .env file in /server with your local PostgreSQL details
npm start

### 4. Database Setup
Open PostgreSQL (via pgAdmin or psql terminal) and create a new database:

SQL
CREATE DATABASE smart_procurement;
Create a .env file in your /server directory and configure your credentials:

"Code snippet
PORT=5000
PG_USER=postgres
PG_HOST=localhost
PG_DATABASE=smart_procurement
PG_PASSWORD=7036148555
PG_PORT=5432"

🚀 Live Demo
Experience the live interactive frontend deployed on Netlify at [Your Netlify URL] and explore the connected backend services via [Your Deployed Backend URL].

🔮 Future Roadmap
[1] Integration with real-time market price APIs.

[2] Offline-first mobile PWA support for remote rural areas.

[3] SMS/WhatsApp notifications for procurement status updates.

=> Login Page and Register page.
<img width="997" height="547" alt="image" src="https://github.com/user-attachments/assets/1df2a350-7301-4830-85f1-af03572ae3ff" />

=> Farmer's Space
<img width="765" height="592" alt="image" src="https://github.com/user-attachments/assets/a9ef8c6c-e594-4055-b3e0-747fac961e4e" />

=> Staff's Space 
<img width="747" height="617" alt="image" src="https://github.com/user-attachments/assets/6144e2c5-ef94-43a9-b249-59a601dad504" />

=> Admin's Space
<img width="987" height="488" alt="image" src="https://github.com/user-attachments/assets/14dbb64e-6639-42b6-acb5-e27986bfb485" />





