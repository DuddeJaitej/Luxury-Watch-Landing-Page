# Luxury Watch Landing Page

A polished, premium landing page for a luxury watch brand built with React, TypeScript, Vite, and Tailwind CSS. This project features a modern one-page experience with a hero section, product gallery, specifications, animated UI elements, and contact/reservation flows.

## Project Overview

This project is designed to look elegant and premium, similar to a high-end luxury watch brand website. It includes:

- A strong hero section with a bold headline and call-to-action buttons
- A curated product gallery with animation and hover effects
- Detailed product specifications and brand storytelling
- Reservation and contact modals for lead generation
- Multiple informational pages such as Warranty, Service, Shipping, Privacy, and Terms

## Tech Stack

- Frontend: React 19, TypeScript, Vite
- Styling: Tailwind CSS, custom CSS variables, Radix UI primitives
- Routing: Wouter
- Animation: Framer Motion
- UI utilities: Lucide Icons, Sonner Toasts, Recharts
- Backend / server: Express
- Package manager: pnpm

## Project Structure

```text
luxury-watch-landing/
├── client/                  # Vite frontend application
│   ├── index.html
│   ├── public/              # Static public assets and placeholders
│   └── src/
│       ├── App.tsx          # Main app and routing
│       ├── components/      # Shared UI components and modals
│       ├── contexts/        # Theme context
│       ├── hooks/           # Reusable hooks
│       ├── lib/             # Utility helpers
│       ├── pages/           # Route-based screens
│       └── index.css        # Global styles and theme setup
├── server/                  # Express server for production serving
├── shared/                  # Shared constants/data
├── vite.config.ts          # Vite configuration and plugins
└── package.json             # Scripts and dependencies
```

## Step-by-Step Setup

### 1. Install Node.js and pnpm

Make sure you have Node.js installed on your machine.

Verify the installation:

```bash
node -v
npm -v
```

If pnpm is not installed, enable it using Corepack:

```bash
corepack enable
corepack prepare pnpm@10.4.1 --activate
```

### 2. Install Dependencies

From the project root, run:

```bash
pnpm install
```

If pnpm is not recognized in your terminal, use:

```bash
corepack pnpm install
```

### 3. Run the Development Server

Start the local development environment:

```bash
pnpm dev -- --host
```

This will launch the Vite development server and make the app available in your browser.

### 4. Build for Production

To create a production build:

```bash
pnpm build
```

This command will:

- build the frontend using Vite
- bundle the Express server into the `dist/` folder

### 5. Run the Production Server

After building the app, you can start the production server:

```bash
pnpm start
```

The app will be served on:

```text
http://localhost:3000
```

## Available Scripts

The following scripts are available in `package.json`:

```bash
pnpm dev          # Start Vite dev server
pnpm build        # Build frontend + server
pnpm start        # Run production server
pnpm preview      # Preview production build locally
pnpm check        # Run TypeScript checks
pnpm format       # Format code with Prettier
```

## How the Project Works

### Frontend Flow

1. The app is bootstrapped through `client/src/main.tsx`.
2. `client/src/App.tsx` contains the routing for all pages.
3. The main landing page is rendered from `client/src/pages/Home.tsx`.
4. Reusable components are located in `client/src/components/`.
5. UI styling is handled through Tailwind CSS and component-based classes.

### Routing Overview

The app includes several routes:

- `/` — Home page
- `/warranty` — Warranty page
- `/service` — Service page
- `/shipping` — Shipping page
- `/privacy` — Privacy policy page
- `/terms` — Terms page
- `/contact` — Contact page

### Assets and Media

Images and static assets are stored in:

- `client/src/Assets/` for source images
- `client/public/` for public files and placeholders

### Server Flow

The Express server in `server/index.ts` serves the production build from the `dist/public` folder and handles browser requests for client-side routes.

## Git and GitHub Commands

### Initialize a Git Repository

```bash
git init
git branch -M main
git remote add origin <your-repo-url>
```

### Commit and Push

```bash
git add .
git commit -m "Initial commit"
git push -u origin main
```

### Common Git Commands

```bash
git status
git pull --rebase origin main
git checkout -b feature/my-feature
git push -u origin feature/my-feature
git log --oneline
git diff origin/main..HEAD
```

## Deployment Notes

You can deploy this project in several ways:

### Option 1: Static Hosting

Deploy the built frontend from the `dist/public` folder to services such as:

- Netlify
- Vercel
- Cloudflare Pages

### Option 2: Full Node Server

Run the built server on a VPS, Docker container, or hosting platform that supports Node.js:

```bash
pnpm build
pnpm start
```

## Troubleshooting

### If dependencies fail to install

Try:

```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### If images do not appear

- Ensure the asset is in `client/src/Assets/` and imported correctly
- Or place the file in `client/public/` and reference it using `/your-file.ext`

### If the app does not start

Check:

```bash
pnpm check
pnpm build
```

## Contribution

Feel free to fork the repository, make improvements, and open a pull request.

## License

This project is licensed under the MIT License.
