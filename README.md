````md
# Lendsqr Frontend Assessment

This project is a high-fidelity frontend implementation of the Lendsqr Admin Dashboard.  
It demonstrates a professional approach to building scalable web applications using React, TypeScript, and modern frontend best practices.

---

## 🚀 Live Demo

**Hosted App:** https://lendsqr-fe-test-3cm5.onrender.com/  
**Repository:** https://github.com/oyemwilson/lendsqr-fe-test

---

## 🛠 Tech Stack

| Technology | Purpose |
|-----------|----------|
| React + TypeScript | Component-based UI with strict type safety |
| Vite | Fast build tool and development server |
| SCSS (Modules) | Scalable, scoped styling with variables and mixins |
| React Router | Client-side routing for seamless navigation |
| Vitest + RTL | Unit and integration testing |
| Render | Automated CI/CD and static site hosting |

---

## 📁 Project Structure

```text
src/
 ├── api/        # Mock API and data fetching logic
 ├── components/ # Reusable UI components (Atoms, Molecules)
 ├── pages/      # View-level components (Dashboard, User Details)
 ├── hooks/      # Custom hooks (Filtering, Pagination)
 ├── styles/     # Global SCSS, variables, and design tokens
 └── types/      # Centralized TypeScript interfaces
````

---

## ⚙️ Setup & Development

### Prerequisites

* Node.js 18+
* npm

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

### Run tests

```bash
npm run test
```

---

## 🧠 Key Implementation Decisions

* **Custom Data Hook:** Developed a `useUsers` hook to centralize fetching, filtering, and pagination logic, keeping UI components clean.
* **Performance:** Implemented client-side filtering with memoization to ensure smooth interaction even as the user list grows.
* **Responsive Design:** Utilized SCSS media queries and flexbox/grid for a mobile-first approach, including a collapsible sidebar.
* **Type Safety:** Every data object (User, Organization, etc.) is strictly typed to prevent runtime errors and improve developer experience.

---

## 🧪 Testing Strategy

The application uses **Vitest** and **React Testing Library** to ensure reliability:

* **Logic:** Tests for filtering and pagination utilities.
* **UI:** Verification of component rendering and user interaction flows.
* **API:** Mocking data responses to test state transitions.

---

## ⚠️ Challenges & Resolutions

* **Cross-Platform Case Sensitivity:** Encountered import errors during the Linux-based build process on Render. Resolved by enforcing consistent file naming and matching import paths.
* **Bundle Size Optimization:** Analyzed build reports to manage large mock datasets; implemented lazy loading for non-critical routes.
* **Sass Migration:** Structured styles to be compatible with modern `@use` and `@forward` modules for future-proofing.
* **Data Persistence:** As this is a frontend-only task, user changes are handled in state and are not persisted.

---

## 👤 Author

**Name:** Oyem Ikenna Wilson
**Role:** Frontend Engineer
**Portfolio:** [https://oyemwilson.com/](https://oyemwilson.com/)
**Purpose:** Lendsqr Frontend Engineering Assessment
