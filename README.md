# INA-province

## Overview

This is a REST API built with Hono to provide detailed information about the 38 provinces of Indonesia

## Features

- Get all provinces
- Get province by id
- Create new province
- Update province by id
- Delete province by id

## Rest API Specification

| Enpoint Path           | Method   | Description           |
| ---------------------- | -------- | --------------------- |
| `/api/v1/province`     | `GET`    | Get all provinces     |
| `/api/v1/province/:id` | `GET`    | Get province by id    |
| `/api/v1/province/:id` | `PUT`    | Update province by id |
| `/api/v1/province/:id` | `DELETE` | Delete province by id |
| `/api/v1/province`     | `POST`   | Create new province   |

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
