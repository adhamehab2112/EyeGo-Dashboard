# Eyego Dashboard 

A responsive, Firebase-authenticated admin dashboard built with **Next.js App Router**, **Tailwind CSS**, and **Redux Toolkit**. The system features user authentication, stats visualization, interactive charts, and a searchable table — all mobile-friendly and production-ready.

🔗 **Live Demo:** [https://eyego-dashboard-roan.vercel.app/login](https://eyego-dashboard-roan.vercel.app/login)

🧪 **Test Credentials:**
- **Email:** `admin@eyego.ai`
- **Password:** `admin123`

---

##  Features

-  Firebase Email/Password Authentication
-  Dashboard with KPIs, charts, and user table
-  Recharts for bar, line, and pie chart visualizations
-  Tailwind CSS responsive UI
-  Redux Toolkit for state management
-  Route protection with layout-based guards
-  Linted, typed, and Vercel-deployable

---

##  Folder Structure (App Router)

```
/src
├── app
│   ├── page.tsx                 # Entry point (login)
│   ├── layout.tsx               # Global wrapper + ReduxProvider
│   ├── login/                   # Login page route
│   ├── dashboard/               # Protected dashboard route
│   └── Components/             
│       ├── AuthGuard/          # Route guard logic
│       ├── DashBoardComponent/ # KPIs, charts
│       ├── LoginComponent/     # Login form UI
│       ├── ProviderWrapper/    # ReduxProvider
│       └── UsersTable/         # User table with filters and pagination
├── lib/                         # Firebase config
├── store/                       # Redux setup
├── assets/                      # Images, logos
├── styles/                      # Global Tailwind setup
└── _mockedData/                 # Sample user data
```

---

##  Getting Started

1. **Clone the repo:**
```bash
git clone https://github.com/your-username/eyego-dashboard.git
cd eyego-dashboard
```

2. **Install dependencies:**
```bash
npm install
```

3. **Add Firebase config:**
Create `.env.local` at the root:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=xxxxx
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=xxxxx
NEXT_PUBLIC_FIREBASE_PROJECT_ID=xxxxx
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=xxxxx
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=xxxxx
NEXT_PUBLIC_FIREBASE_APP_ID=xxxxx
```

4. **Run locally:**
```bash
npm run dev
```
Visit: [http://localhost:3000](http://localhost:3000)

---

##  Deployment

Project is deployed on **Vercel**:  
🔗 [https://eyego-dashboard-roan.vercel.app](https://eyego-dashboard-roan.vercel.app)



---

##  Notes

- Uses App Router (`/app`) and server/client separation
- Redux `Provider` wrapped in a client component
- All routes are protected using `AuthGuard`
- Modular architecture for scalability


