import { PrismaClient } from "@prisma/client/edge";
import { createRoute, OpenAPIHono } from "@hono/zod-openapi";
import { CitySchema, CityListSchema } from "@/modules/city/schema";
import {
  ParamCodeCitySchema,
  ParamIdSchema,
  ParamSlugSchema,
} from "@/modules/common/schema";

const prisma = new PrismaClient();

export const inaCityRoute = new OpenAPIHono();

// Get All Cities
inaCityRoute.openapi(
  createRoute({
    method: "get",
    path: "/",
    tags: ["City"],
    description: "Get all Cities",
    responses: {
      200: {
        content: {
          "application/json": {
            schema: CityListSchema,
          },
        },
        description: "Get all Cities",
      },
    },
  }),
  async (c) => {
    const Cities = await prisma.city.findMany({
      include: {
        province: true,
      },
    });
    return c.json(Cities);
  }
);

// Get City by slug
inaCityRoute.openapi(
  createRoute({
    method: "get",
    path: "/{slug}",
    tags: ["City"],
    description: "Get city by slug",
    request: { params: ParamSlugSchema },
    responses: {
      200: {
        content: { "application/json": { schema: CitySchema } },
        description: "Successfully get City by slug",
      },
      404: {
        description: "City not found",
      },
    },
  }),
  async (c) => {
    const { slug } = c.req.valid("param");
    const City = await prisma.city.findUnique({
      where: { slug },
      include: {
        province: true,
      },
    });
    if (!City) {
      return c.json({ message: "City not found" }, 404);
    }
    return c.json(City);
  }
);

// Get City by code
inaCityRoute.openapi(
  createRoute({
    method: "get",
    path: "/code/{code}",
    tags: ["City"],
    description: "Get city by code",
    request: { params: ParamCodeCitySchema },
    responses: {
      200: {
        content: { "application/json": { schema: CitySchema } },
        description: "Successfully get City by code",
      },
      404: {
        description: "City not found",
      },
    },
  }),
  async (c) => {
    const { code } = c.req.valid("param");
    const City = await prisma.city.findUnique({
      where: { code },
      include: {
        province: true,
      },
    });
    if (!City) {
      return c.json({ message: "City not found" }, 404);
    }
    return c.json(City);
  }
);

// Get City by Id
inaCityRoute.openapi(
  createRoute({
    method: "get",
    path: "/id/{id}",
    tags: ["City"],
    description: "Get city by Id",
    request: { params: ParamIdSchema },
    responses: {
      200: {
        content: { "application/json": { schema: CitySchema } },
        description: "Successfully get City by Id",
      },
      404: {
        description: "City not found",
      },
    },
  }),
  async (c) => {
    const { id } = c.req.valid("param");
    const City = await prisma.city.findUnique({
      where: { id },
      include: {
        province: true,
      },
    });
    if (!City) {
      return c.json({ message: "City not found" }, 404);
    }
    return c.json(City);
  }
);
