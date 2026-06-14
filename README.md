# 🌐 Gilles Crieloue Portfolio & Blog

[![React Router v7](https://img.shields.io/badge/React_Router-v7.12-CA4245?style=flat-square&logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Contentful CMS](https://img.shields.io/badge/Contentful_CMS-headless-005EC4?style=flat-square&logo=contentful&logoColor=white)](https://www.contentful.com/)
[![Vite](https://img.shields.io/badge/Vite-v7.3-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)

Welcome to the repository for **Gilles Crieloue's personal website, CV, and developer blog**. This website is built using modern front-end technologies and operates as a fast, single-page application (SPA) precompiled for static deployment. All dynamic content, including CV items, work experience timelines, and blog posts, is managed headlessly via **Contentful CMS**.

🔗 **Live Website:** [gilles.crieloue.fr](https://gilles.crieloue.fr)

---

## ✨ Features

- **📄 Interactive CV / Resume:** An elegant, single-page professional resume featuring a dynamic education background, languages, and custom skills dashboard.
- **⏳ Interactive Work Experience Timeline:** Visual journey of work experience sorted chronologically, supporting multi-language translations directly pulled from Contentful.
- **✍️ Headless Markdown Blog:** A fully featured blog with markdown posts fetched dynamically, supporting advanced features like custom smilies and code block formatting.
- **🎨 Modern Dark Mode First Design:** Clean, elegant dark-mode UI with beautiful styling, gradients, and typography using **Inter** and premium Tailwind CSS styling.
- **⚡ Syntax Highlighting:** Integration of **Shiki** for GitHub Dark theme syntax highlighting of all code blocks inside blog posts.
- **🎬 Micro-Animations:** Fluid, premium animations powered by **Framer Motion** to enhance user engagement.
- **📦 SPA GitHub Pages Deployment:** Built with React Router's SPA compilation and automated fallback setup to support single-page navigation without server-side routing.

---

## 🛠️ Technology Stack

| Technology           | Purpose           | Description                                                                       |
| :------------------- | :---------------- | :-------------------------------------------------------------------------------- |
| **React Router v7**  | Core Framework    | Powering routes, navigation, and SPA build configuration.                         |
| **Vite**             | Build Tooling     | Lightning-fast development server and optimized asset bundle compiler.            |
| **Tailwind CSS v4**  | Styling & UI      | Curated dark mode styling utilizing modern CSS-first configuration and utilities. |
| **Contentful SDK**   | Headless CMS      | Dynamic content storage for CV, experience details, and articles.                 |
| **Zustand**          | State Management  | Simple, high-performance global store for caching fetched entries.                |
| **Framer Motion**    | Motion Design     | Seamless page transitions and micro-interactions.                                 |
| **Shiki**            | Code Highlighting | Real-time backend-free syntax highlighter for code snippets.                      |
| **Showdown**         | Markdown Engine   | Converting Markdown article bodies from Contentful into HTML.                     |
| **Husky & Prettier** | Quality Control   | Automatic pre-commit hook style enforcement.                                      |

---

## 📂 Project Structure

```
.
├── .github/                 # GitHub workflows & actions
├── .husky/                  # Git hooks (pre-commit formatting)
├── app/                     # React Router app source code
│   ├── components/          # Reusable UI parts & page sections
│   │   ├── ui/              # Atom level layout text and design elements
│   │   ├── About.tsx        # Profile overview CV section
│   │   ├── Education.tsx    # Educational background CV section
│   │   ├── Skills.tsx       # Tech skills dashboard CV section
│   │   └── ...              # Other CV sections
│   ├── routes/              # Route components/views
│   │   ├── cv.tsx           # Home page / Curriculum Vitae
│   │   ├── blog.tsx         # Blog listing feed
│   │   └── blog-post.tsx    # Detailed blog post article viewer
│   ├── api.ts               # Contentful Client, markdown converter, and Zustand store
│   ├── app.css              # Tailwind CSS imports & global variables
│   ├── root.tsx             # Main layout, html wrappers, metadata header scripts
│   └── routes.ts            # Declarative application route mapping
├── public/                  # Static assets (images, CNAME, etc.)
├── CNAME                    # Custom domain pointer for GitHub Pages (gilles.crieloue.fr)
├── Dockerfile               # Node server container configuration
├── react-router.config.ts   # React Router build definitions (e.g. ssr: false)
├── vite.config.ts           # Vite plugin chain and bundler variables
└── package.json             # Build scripts and dependencies
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18 or higher recommended) installed.

### 1. Installation

Clone this repository and install the dependencies:

```bash
git clone https://github.com/gcrieloue/gcrieloue-main.github.io.git
cd gcrieloue-main.github.io
npm install
```

### 2. Run the Development Server

Start Vite's development server with HMR:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### 3. Build for Production

Compile the application to highly optimized static assets:

```bash
npm run build
```

This generates static client files inside the `build/client/` directory and duplicates `index.html` into `404.html` so that GitHub Pages correctly redirects clean URL page requests (like `/blog`) to the SPA router index.

---

## 📝 Content Management (Contentful)

The website queries a headless space in Contentful. The React components interface with the dynamic data through structures defined in [app/api.ts](file:///c:/Users/gille/DevHome/gcrieloue-main.github.io/app/api.ts).

### Content Types Schema

- **`article`**: Stores blog posts.
  - Fields: `title` (Symbol), `content` (Markdown Text), `date` (Date), `slug` (Symbol).
- **`workExperience`**: Stores professional career timeline details.
  - Fields: `company` (Symbol), `jobTitle` (Symbol), `description` (Markdown Text), `periodBegin` (Date), `periodEnd` (Date).
- **`paragraph`**: General text paragraphs for the CV about section.
  - Fields: `text` (Markdown Text).

All fetching logic, markdown-to-HTML conversion, custom smiley formatting (`:)` ➡️ `😃`), and syntax highlighting are abstracted inside the Zustand application store `useStore` in `api.ts`.

---

## 🌐 Deployment & Hosting

The project is configured for **GitHub Pages** static hosting:

1. **SPA Build Redirects**: GitHub Pages doesn't natively support dynamic client-side routes (like `/blog`) on direct page loads. The build script copies `build/client/index.html` to `build/client/404.html` as a fallback. When GitHub Pages serves `404.html` for direct route requests, the React Router SPA mounts and routes the user to the correct page automatically.
2. **Custom Domain**: A `CNAME` file in the root matches the DNS records pointing to `gilles.crieloue.fr`.
3. **Docker**: A standard `Dockerfile` is also included if you want to deploy the application inside a container on platforms like Fly.io, Railway, or AWS.

---

Built with ❤️ using **React Router** & **Tailwind CSS**.
