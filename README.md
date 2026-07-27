# Abdullah Firoj — Portfolio

A modern, dark-themed personal portfolio built with React (Vite), Tailwind CSS,
Framer Motion, and React Icons. Targets Software Engineer, AI Engineer, ML
Engineer, and Full-Stack Developer roles.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

## Contact form (EmailJS)

The contact form uses [EmailJS](https://www.emailjs.com/) to send messages
without a backend.

1. Create a free EmailJS account, an email service, and an email template
   with `from_name`, `from_email`, and `message` variables.
2. Copy `.env.example` to `.env` and fill in your keys:

```bash
cp .env.example .env
```

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

3. Restart `npm run dev` after adding the `.env` file.

Until these are set, the form will show a friendly error instead of failing
silently.

## Resume

Place your resume PDF at `public/resume.pdf` — the "Download Resume" button
in the Hero section links to `/resume.pdf`.

## Editing content

- **Projects & research:** `src/data/projects.js`
- **Skills:** `src/data/skills.js`
- **Copy/text:** directly inside each component in `src/components/`
- **Colors/fonts:** `tailwind.config.js`
- **Social links & email:** `src/components/Hero.jsx`, `Contact.jsx`, `Footer.jsx`
  (currently placeholder `#`/`your.email@example.com` — update with your real
  GitHub, LinkedIn, and email)

## Deployment

### Vercel

1. Push this project to a GitHub repository.
2. Import the repo in [Vercel](https://vercel.com/).
3. Framework preset: **Vite**. Build command: `npm run build`. Output dir: `dist`.
4. Add the three `VITE_EMAILJS_*` environment variables in the Vercel project
   settings before deploying.

## Tech stack

- React 18 + Vite
- Tailwind CSS
- Framer Motion
- React Icons
- EmailJS (`@emailjs/browser`)
- ESLint
