# INA-Zone API

## Overview

This is a REST API built with Hono to provide CRUD operations on provincess and zone of Indonesia using PostgreSQL database.

## Tech Stack

- Bun
- Hono
- TypeScript
- Docker
- PostgreSQL

## Features

- Get all provincess
- Get provinces by id
- Create new provinces
- Update provinces by id
- Delete provinces by id

## Rest API Specification

Prefix: `/api/`

| Enpoint Path            | Method   | Description                                 |
| ----------------------- | -------- | ------------------------------------------- |
| `provinces`             | `GET`    | Get all provinces                           |
| `provinces/:id`         | `GET`    | Get provinces by id                         |
| `provinces/code/:code`  | `GET`    | Get provinces by code                       |
| `provinces/:slug/:slug` | `GET`    | Get provinces by slug                       |
| `provinces`             | `POST`   | Create new province                         |
| `provinces/:id`         | `DELETE` | Delete provinces by id                      |
| `provinces/:id`         | `PATCH`  | Update provinces by id                      |
| `provinces/:id`         | `PUR`    | Update provinces by id, create if not exist |

## Getting Started

To install dependencies:

```sh
bun install
```

To run:

```sh
bun run dev
```

open http://localhost:3000
