<div align="center">

# Hatim Toor — Portfolio

**AI Automation Engineer & Workflow Specialist**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-hatim--toor-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/hatim-toor)
[![GitHub](https://img.shields.io/badge/GitHub-hatimtoor-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/hatimtoor)
[![Email](https://img.shields.io/badge/Email-hatimtoor2025%40gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:hatimtoor2025@gmail.com)

</div>

---

## Overview

Personal portfolio website for **Hatim Toor** — AI Automation Engineer and Team Lead with 3+ years of expertise in n8n workflow automation, LLM integration, and intelligent agent development. Built with a modern dark aesthetic, interactive 3D physics, and a focus on performance.

---

## Built With

### Portfolio Tech Stack

![React](https://img.shields.io/badge/React_18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=threedotjs&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

### My Professional Stack

![n8n](https://img.shields.io/badge/n8n-EA4B71?style=for-the-badge&logo=n8n&logoColor=white)
![Python](https://img.shields.io/badge/Python-3572A5?style=for-the-badge&logo=python&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI-10A37F?style=for-the-badge&logo=openai&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![WhatsApp](https://img.shields.io/badge/WhatsApp_API-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)
![Google](https://img.shields.io/badge/Google_Workspace-4285F4?style=for-the-badge&logo=google&logoColor=white)

---

## Features

- **Interactive Physics Balls** — 36 floating tech-stack spheres powered by Rapier physics with zero gravity and mouse repulsion
- **Neon Hero Photo** — Circular frame with pulsing layered neon glow
- **Custom Cursor** — Smooth lerp-based cursor with hover state effects
- **Loading Screen** — Animated progress bar on first load
- **Sticky Navbar** — Blurs on scroll, smooth section navigation
- **Performance Optimised** — Initial bundle ~80KB; Rapier WebAssembly engine lazy-loads only when the user scrolls to Tech Stack
- **Contact Form** — Pre-fills a mailto with name, email, and message
- **Fully Responsive** — Mobile-first layout across all sections

---

## Sections

| # | Section | Description |
|---|---|---|
| 1 | **Landing** | Hero with photo, title, CV download button, and social links |
| 2 | **About** | Bio, stats (3+ yrs, 50+ projects, 30% revenue growth), skill tags |
| 3 | **What I Do** | Four service cards — Automation, AI/LLMs, Integrations, Web Apps |
| 4 | **Tech Stack** | Physics-based floating spheres with tech logos |
| 5 | **Work** | Five featured AI automation projects with outcomes |
| 6 | **Career** | Experience timeline + education |
| 7 | **Contact** | Contact form + direct links |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/hatimtoor/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
npm run preview
```

---

## Project Structure

```
portfolio/
├── public/
│   ├── images/              # Tech SVG logos + headshot
│   └── Hatim_Toor_CV.docx   # Downloadable CV
├── src/
│   ├── components/
│   │   ├── styles/          # Per-component CSS files
│   │   ├── About.tsx
│   │   ├── Career.tsx
│   │   ├── Contact.tsx
│   │   ├── Cursor.tsx
│   │   ├── Landing.tsx
│   │   ├── Loading.tsx
│   │   ├── Navbar.tsx
│   │   ├── TechStack.tsx    # Rapier physics balls
│   │   ├── WhatIDo.tsx
│   │   └── Work.tsx
│   ├── data/
│   │   └── portfolioData.ts # All content in one place
│   ├── App.tsx
│   └── main.tsx
├── vite.config.ts
└── package.json
```

---

## Performance

| Chunk | Loads | Gzip Size |
|---|---|---|
| App + React | Immediately | ~80KB |
| Three.js | Immediately | ~18KB |
| TechStack component | On scroll | ~2KB |
| Rapier physics (WASM) | On scroll | ~1MB |
| Post-processing | On scroll | ~90KB |

Rapier and post-processing only download when the user scrolls to the Tech Stack section, keeping the initial load fast.

---

## Design System

| Token | Value |
|---|---|
| Background | `#0b080c` |
| Text | `#eae5ec` |
| Accent | `#c2a4ff` (lavender) |
| Muted | `rgba(234, 229, 236, 0.45)` |
| Font | Inter (variable, 100–900) |

---

## Inspiration

Inspired by [MoncyDev/Portfolio-Website](https://github.com/MoncyDev/Portfolio-Website) and [khushi-varshney17/Portfolio_Shrishti](https://github.com/khushi-varshney17/Portfolio_Shrishti).

---

<div align="center">

Made by **Hatim Toor** &nbsp;·&nbsp; [hatimtoor2025@gmail.com](mailto:hatimtoor2025@gmail.com) &nbsp;·&nbsp; [linkedin.com/in/hatim-toor](https://www.linkedin.com/in/hatim-toor)

</div>
