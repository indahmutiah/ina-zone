# INA-Zona

## Overview

This is a REST API built with Hono to provide CRUD operations on provincess.

## Features

- Get all provincess
- Get provinces by id
- Create new provinces
- Update provinces by id
- Delete provinces by id

## Rest API Specification

Prefix: `/api/v1`

| Enpoint Path            | Method   | Description            |
| ----------------------- | -------- | ---------------------- |
| `provinces`             | `GET`    | Get all provinces      |
| `provinces/:id`         | `GET`    | Get provinces by id    |
| `provinces/code/:code`  | `GET`    | Get provinces by code  |
| `provinces/:slug/:slug` | `GET`    | Get provinces by slug  |
| `provinces`             | `POST`   | Create new province    |
| `provinces/:id`         | `DELETE` | Delete provinces by id |
| `provinces/:id`         | `PATCH`  | Update provinces by id |

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
