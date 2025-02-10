# INA Zone

## Overview

This is a REST API built with Hono to provide detailed information about the 38 provinces of Indonesia.

## Features

- Get all provinces
- Get province by id
- Create new province
- Update province by id
- Delete province by id

## Rest API Specification

Prefix endpoint: `/api/v1`

| Enpoint Path            | Method   | Description           |
| ----------------------- | -------- | --------------------- |
| `/provinces`            | `GET`    | Get all provinces     |
| `/provinces/:id`        | `GET`    | Get province by id    |
| `/provinces/code/:code` | `GET`    | Get province by code  |
| `/provinces/slug/:slug` | `GET`    | Get province by slug  |
| `/provinces`            | `POST`   | Create new province   |
| `/provinces/:id`        | `DELETE` | Delete province by id |
| `/provinces/:id`        | `PATCH`  | Update province by id |

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
