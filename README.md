# INA-Zone API

## Overview

This is a REST API built with Hono to provide CRUD operations on provincess and zone of Indonesia using PostgreSQL database.

Links:

- [ina-zone.indahmutiah.com](https://ina-zone.indahmutiah.com)

## Tech Stack

- Bun
- Hono
- TypeScript
- Zod OpenAPI
- Docker
- PostgreSQL
- Prisma

## ER Diagram

![ER Diagram](/assets/erd-ina-zone.png)

## Features

- Get all provincess
- Get provinces by id
- Get provinces by code
- Get provinces by slug
- Get all cities
- Get cities by id
- Get cities by code

## Rest API Specification

Prefix: `/api/`

| Enpoint Path          | Method | Description           |
| --------------------- | ------ | --------------------- |
| `province`            | `GET`  | Get all provinces     |
| `province/:id`        | `GET`  | Get provinces by id   |
| `province/code/:code` | `GET`  | Get provinces by code |
| `province/slug/:slug` | `GET`  | Get provinces by slug |
| `city`                | `GET`  | Get all cities        |
| `city/:id`            | `GET`  | Get cities by id      |
| `city/code/:code`     | `GET`  | Get cities by code    |
| `city/slug/:slug`     | `GET`  | Get cities by slug    |

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
