# Torchbearers

React/Vite single-page marketing site built inside Docker and served by Nginx.

## Run Locally

Use one Docker Compose command from this directory:

```bash
docker compose up --build --watch
```

Open http://localhost:8080.

Docker Compose will rebuild the container when source files change.

Stop the site with `Ctrl+C`, then remove the container if needed:

```bash
docker compose down
```
