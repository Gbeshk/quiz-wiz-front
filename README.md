# Quiz Wiz — Frontend

---

Quiz Wiz is a quiz platform where users can register with email verification, reset their password, and browse, sort, and filter quizzes to attempt.

This repository is the **frontend**, a React single-page app that consumes the Quiz Wiz API. The backend (Laravel) lives in a separate repository — see [Resources](#resources) for the link.

#

### Table of Contents

- [Prerequisites](#prerequisites)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Development](#development)
- [Deployment](#deployment)
- [Resources](#resources)

#

### Prerequisites

- **Node.js & npm**
- The [backend repository](https://github.com/RedberryInternship/giorgi-beshkenadze-quiz-wiz-back) running locally — this app depends on the API for all data (auth, quizzes, etc.). Without it running, the app will load but requests will fail / no data will display.

#

### Tech Stack

- [React 19](https://react.dev/) — UI library
- [TypeScript](https://www.typescriptlang.org/) — static typing
- [Vite](https://vitejs.dev/) — build tool & dev server
- [React Router](https://reactrouter.com/) — routing
- [TanStack Query](https://tanstack.com/query/latest) — data fetching / server state, used for all API requests
- [Axios](https://axios-http.com/) — HTTP client
- [React Hook Form](https://react-hook-form.com/) — form handling & validation
- [TailwindCSS](https://tailwindcss.com/) — styling
- [React Hot Toast](https://react-hot-toast.com/) — notifications
- [ESLint & Prettier](https://redberry.gitbook.io/resources/eslint-and-prettier-is-gamartva-vue.js-proektshi) — linter & formatter

#

### Getting Started

1\. Clone the repository:

```sh
git clone https://github.com/RedberryInternship/giorgi-beshkenadze-quiz-wiz-front.git
cd giorgi-beshkenadze-quiz-wiz-front
```

2\. Install dependencies:

```sh
npm install
```

3\. Set up your environment file:

```sh
cp .env.example .env
```

And make sure it points to your local backend:

```env
VITE_API_URL=http://localhost:8000
```

4\. Make sure the [backend](https://github.com/RedberryInternship/giorgi-beshkenadze-quiz-wiz-back) is running first (see its README), then start the dev server:

```sh
npm run dev
```

##### Now, you should be good to go!

#

### Development

Run the app in development mode with hot reload:

```sh
npm run dev
```

Before committing, lint your code and fix any issues:

```sh
npm run lint
```

To build a production bundle (type-checks with `tsc` first, then builds with Vite):

```sh
npm run build
```

You can preview the production build locally with:

```sh
npm run preview
```

#

### Deployment

The app is built with `npm run build` and the resulting static `dist/` output is served directly by **Nginx**, with SSL provided by **Let's Encrypt**.

- **Production:** [https://quiz-wiz.giorgi-beshkenadze.redberryinternship.ge](https://quiz-wiz.giorgi-beshkenadze.redberryinternship.ge)

Deployment steps, run manually on the server after pulling the latest code:

```sh
git pull origin main
npm install
npm run build
```

The production environment variable is set in `.env.production`:

```env
VITE_API_URL=https://quiz-wiz-api.giorgi-beshkenadze.redberryinternship.ge
```

- Authentication uses Sanctum's cookie-based SPA flow (`withCredentials`, CSRF cookie fetched via `/sanctum/csrf-cookie`), which works across the frontend and API subdomains since both share the same parent domain.
- There is currently no CI/CD pipeline — deploys are manual. This section will be updated if that changes.

#

### Resources

- **Backend repository:** [quiz-wiz-back](https://github.com/RedberryInternship/giorgi-beshkenadze-quiz-wiz-back)
- **Figma design:** [QuizWiz](https://www.figma.com/design/QTWoxa2OYVayZ04WJ0ZZ9k/QuizWiz?node-id=1057-78034&p=f&t=ZJN3ulmEvhMyNMyY-0)
