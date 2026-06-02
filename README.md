**Project Overview**
- **Title:** First Full‑Stack MERN Project (**MEMORIS**)
- **Description:** A simple note-taking app built as my first full-stack MERN (MongoDB, Express, React, Node) project. It includes a REST API backend, a React + Vite frontend, and basic features for creating, viewing, updating, and deleting notes.

**Features**
- **CRUD:** Create, Read, Update, Delete notes.
- **Rate limiting:** Basic rate limiting via Upstash (optional).
- **Responsive UI:** Built with Tailwind CSS and daisyUI.
- **Local dev:** Separate backend and frontend folders for server and client.

**Tech Stack**
- **Languages:** JavaScript (ES Modules), HTML, CSS.
- **Frontend:** React, Vite, react-router-dom, Tailwind CSS, daisyUI.
- **Backend:** Node.js, Express, Mongoose.
- **Database:** MongoDB (Atlas or local).
- **Utilities / Libraries:** Axios, react-hot-toast, lucide-react.
- **Optional services:** Upstash (Redis-based rate limiter).
- **Testing tools:** Postman (recommended for API testing).

**Quick Start (local)**
- **Prereqs:** Node.js and npm installed.
- **Environment variables (backend/.env):**
  - `MONGO_URI` — MongoDB connection string
  - `PORT` — (optional) backend port, default 5001
  - `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` — optional (rate limiter)
- **Run backend:**
  ```
  cd backend
  npm install
  npm run dev
  ```
- **Run frontend:**
  ```
  cd frontend
  npm install
  npm run dev
  ```
- **Build frontend for production:**
  ```
  cd frontend
  npm run build
  ```

**API (examples)**
- **Base URL:** `http://localhost:5001/api`
- **Endpoints:**
  - `GET /notes` — list all notes
  - `GET /notes/:id` — get a single note
  - `POST /notes` — create a note (body: `{ title, content }`)
  - `PUT /notes/:id` — update a note (body: `{ title, content }`)
  - `DELETE /notes/:id` — delete a note

**Postman / API Testing**
- Create requests in Postman using the Base URL above.
- Example: GET `http://localhost:5001/api/notes` to fetch all notes.
- For rate-limited responses, watch for HTTP 429 and retry after a short delay.

**Notes & Deployment**
- The repo has separate backend and frontend directories—run servers separately during development.
- If you don't set Upstash env vars, the app falls back to a no-op limiter for local development; set them in production for real rate limiting.
- Ensure you restart the backend after changing .env.

**Troubleshooting**
- If frontend can’t reach backend, verify:
  - Backend is running and listening (default port 5001).
  - `MONGO_URI` is valid and MongoDB allows connections from your IP.
  - CORS origin allowed (frontend default runs on port 5173).
- Check terminal logs for errors and stack traces.

**License & Contact**
- **Author:** Nisrina Izza Nur Aisyah (Nina) 
- **License:** MIT
