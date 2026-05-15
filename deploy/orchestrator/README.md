# Orchestrator Configuration Bundle

This bundle is a deployment template for running Torchbearers as a single Dockerized web service.

The app builds to static files and is served by Nginx on container port `80`.

## Files

- `.env.example` - environment values for the compose template.
- `docker-compose.template.yml` - compose-style service definition for simple Docker orchestrators.
- `service.template.yml` - generic service manifest for orchestrators that accept YAML service specs.

## Required Image

Build and publish an image first, then update the `IMAGE` value:

```bash
docker build -t ghcr.io/torchbearers-ai/torchbearers:latest .
docker push ghcr.io/torchbearers-ai/torchbearers:latest
```

## Compose-Style Orchestrators

Copy `.env.example` to `.env`, update `IMAGE`, then run:

```bash
docker compose --env-file .env -f docker-compose.template.yml up -d
```

## Generic Service Orchestrators

Use `service.template.yml` as the shape of the service:

- `image`: published container image.
- `containerPort`: `80`.
- `healthcheck.path`: `/`.
- `resources`: safe starter values for a static site.

No runtime environment variables are required by the app.
