# Mycelium - Governance Frontend

This folder contains the frontend of the Mycelium-governance project – an open-source platform built on the principles of transparency, fairness, and collective ownership

## Features ✨

- **Decentralized**: There is no central authority. Decision-making, resource allocation, and coordination are distributed across a network of contributors, ensuring resilience and autonomy.

- **Responsive**: The system adapts in real time to the needs of its participants—whether that’s redistributing tasks, forming new working groups, or initiating governance proposals.

- **Open to All**: Anyone can join, contribute, and be rewarded. Whether you're a developer, designer, researcher, or community builder, your work is recognized and valued.

- **Transparent**: All governance processes, task flows, and financial distributions are documented and visible to the community.

- **Collectively Owned**: Value created is shared fairly through a profit-sharing model, and major decisions are made collaboratively.

## ⚙ Tech Stack

- **Frontend**:
  - Framework: [React](https://react.dev/) with [Vite](https://vitejs.dev/) for a fast development environment.
  - UI: [TailwindCSS](https://tailwindcss.com/) for styling and flexibility in design.

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mycelium-governance/project-mycelium
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

### 🚀 MVP features

- [ ] 🖥️Dashboard

  - Show user stats (tasks completed, PRs merged)
  - Display project-wide stats (e.g. number of contributors, open issues)
  - Notifications for proposals or task mentions

- [ ] 📋Tasks

  - Fetch and list GitHub issues by label (good first issue, frontend, docs, etc.)
  - Filters for task type or difficulty
  - Button/link to claim or view task on GitHub

- [ ] 👤Profile

  - Show user’s GitHub handle + avatar
  - Track individual contributions
  - Display scoring summary (once implemented)

- [ ] 🏛️Governance

  - List current proposals (manual or linked to GitHub Discussions)
  - Status display: Open / Passed / Failed
  - Link to relevant discussion or vote

- [ ]📝 About/Docs (Optional)

  - Static page: explain project vision, how to contribute, link to GitHub + Discord
  - Can pull from existing markdown files in /docs

- [ ] 🛠️ Tech Notes
  - Keep logic minimal (MVP) — focus on structure and routing
  - GitHub API usage recommended for tasks/contributions
  - Use dummy data where real integration isn’t ready yet

### 📂Folder Structure

```
├── frontend/
├── README.md
└── project-mycelium/
    ├── README.md
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── pages/
    │   ├── Dashboard
    │   ├── Governance
    │   ├── Profile
    │   └── Tasks
    ├── public/
    │   └── vite.svg
    ├── src/
    │   ├── App.css
    │   ├── App.tsx
    │   ├── assets
    │   ├── index.css
    │   ├── main.tsx
    │   └── vite-env.d.ts
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    └── vite.config.ts
```

### 📄Agreements & contributors

- Signup on the contributor Form [sign-up](https://docs.google.com/forms/d/e/1FAIpQLSctIFIYWTs7Map4rujeA_DoNn0XftSlQIRi76rx9imspaZ5eQ/viewform)

### 📚Documents

- [Roles and responsibilities](https://github.com/mycelium-governance/project-mycelium/blob/main/docs/roles.md)

### 🧩 How to Contribute

Project Mycelium is a space where coders of all levels come together to learn, grow, and build.

- ✅ Browse tasks in our GitHub issues [Github issue](https://github.com/mycelium-governance/project-mycelium/issues)
- ✅ Comment to self-assign
- ✅ Submit a PR or ask for help in a dev channel
- ✅ All work counts — code, design, writing, docs
