📘 Todo List Frontend — Next.js

This project is the frontend UI for the Todo List application.
It is built using Next.js (App Router) and communicates with a Laravel backend API.

🚀 Features

✔ View all tasks in a clean table layout

✔ Create a new task (with PDF upload)

✔ Edit an existing task

✔ Delete tasks

✔ Modern UI built with TailwindCSS

✔ Fully responsive

🛠️ Tech Stack
Layer	Technology
Frontend	Next.js 14 (App Router)
Styling	TailwindCSS
API Calls	Native fetch + custom API helper
Routing	Dynamic routes (/edit/[id])
⚙️ Installation & Setup

Follow the steps below to run the frontend locally.

1️⃣ Install dependencies
npm install

2️⃣ Set backend API URL

Open:

lib/api.ts


Update:

const API_BASE = "http://127.0.0.1:8000/api";

3️⃣ Start the development server
npm run dev


Frontend will run at:

http://localhost:3000

🔗 API Connection

The frontend uses the Laravel backend:

http://127.0.0.1:8000/api


All API requests are handled through:

lib/api.ts

🎨 UI

The UI uses:

TailwindCSS

Clean card design for forms

Table layout for listing tasks

Buttons for Edit and Delete

File upload input for PDFs

✔ Ready to Use

Once both frontend and backend servers are running:

Your home page displays all todos

You can create, edit, delete tasks

PDF upload and preview work

Everything is synced with the Laravel API