# Torchbearers Data

React/Vite single-page marketing site served by Nginx in production.

## Local Development

Run Vite directly:

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Local Docker

Build the Vite app and run the production-style Nginx container:

```bash
docker compose up --build -d
```

Open http://localhost:8080.

## Local Docker With Live File Updates

Use the dev override to run the Vite dev server in Docker:

```bash
docker compose -f docker-compose.yml -f docker-compose.dev.yml up --build
```

Open http://localhost:5173.

Changes to `src/`, `index.html`, `styles.css`, and `public/` update through Vite.

Stop everything:

```bash
docker compose down
```
