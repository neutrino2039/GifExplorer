# GIF Explorer

This repository contains a fullstack application with:

- **Frontend:** Vite + React + TypeScript
- **Backend:** Express.js + TypeScript

It uses **Docker** configuration for development and production for both frontend and backend and uses **Docker Compose:** for orchestrating the projects.

---

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) installed and running
- [Docker Compose](https://docs.docker.com/compose/install/) (comes with Docker Desktop)
- Bash like CLI (Mac OS, Linux or Windows with WSL, tested only on Mac OS though)

---

## Environment Variables

### Docker Compose

Most environment variables (_unprotected_) are set directly in the `development` or `production` docker compose files.

- Backend
  - NODE_ENV: `development`|`production`
- Frontend
  - NODE_ENV: `development`|`production`
    - These will be translated to a `boolean` config variable `DEV` in the frontend code.
  - VITE_BASE_URL: `string` value
    - This can be different for `development` and `production` environments.
    - This will be translated to `BASE_URL` config variable in the frontend.

### `.env` File

This is used to set _protected_ environment variables. The backend uses this file to set the Giphy API key.

The content of this file is referenced directly in the docker compose files as well.

- Backend
  - GIPHY_API_KEY: `string` value
- Frontend
  - N/A

---

## Scripts (`run.sh`)

This script wraps Docker Compose commands:

```bash
./run.sh [dev|prod] [up|rebuild]
```

- `dev` — Development environment using `docker-compose.dev.yml`
- `prod` — Production environment using `docker-compose.prod.yml`
- `up` — Start containers (build images)
- `rebuild` — Stop containers, then build and start fresh

---

## Usage

### Run Development Environment

Starts frontend (`Vite` dev server) and backend (`Express` with `tsx`) in development mode with live reload:

```bash
./run.sh dev up
```

To rebuild (stop and start fresh):

```bash
./run.sh dev rebuild
```

---

### Run Production Environment

Builds and serves optimized frontend (via `Nginx`) and backend (compiled `Node.js` app):

```bash
./run.sh prod up
```

To rebuild production containers:

```bash
./run.sh prod rebuild
```

---

## Notes

- Backend development server exposed on port **3000**
- Backend production server exposed on port **3000**
- Frontend development environment exposed on port **4000**
- Frontend production environment served using Nginx on port **80**

---

## License

MIT © Aman Maharjan

---

```
 _
//\
V  \
 \  \_
  \,'.`-.
   |\ `. `.
   ( \  `. `-.                        _,.-:\
    \ \   `.  `-._             __..--' ,-';/
     \ `.   `-.   `-..___..---'   _.--' ,'/
      `. `.    `-._        __..--'    ,' /
        `. `-_     ``--..''       _.-' ,'
          `-_ `-.___        __,--'   ,'
             `-.__  `----"""    __.-'
                  `--..____..--'
```
