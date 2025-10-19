import { PrismaClient } from "@prisma/client/edge";
import { createRoute, OpenAPIHono } from "@hono/zod-openapi";
import { ProvinceSchema, ProvinceListSchema } from "@/modules/province/schema";
import {
  ParamCodeSchema,
  ParamIdSchema,
  ParamSlugSchema,
} from "@/modules/common/schema";

const prisma = new PrismaClient();

export const inaProvinceRoute = new OpenAPIHono();

// Get All Province
inaProvinceRoute.openapi(
  createRoute({
    method: "get",
    path: "/",
    tags: ["Province"],
    description: "Get all Provinces",
    responses: {
      200: {
        content: {
          "application/json": {
            schema: ProvinceListSchema,
          },
        },
        description: "Get all provinces",
      },
    },
  }),
  async (c) => {
    const provinces = await prisma.province.findMany();
    return c.json(provinces);
  }
);

// Get province by slug
inaProvinceRoute.openapi(
  createRoute({
    method: "get",
    path: "/{slug}",
    tags: ["Province"],
    description: "Get province by slug",
    request: { params: ParamSlugSchema },
    responses: {
      200: {
        content: { "application/json": { schema: ProvinceSchema } },
        description: "Successfully get province by slug",
      },
      404: {
        description: "Province not found",
      },
    },
  }),
  async (c) => {
    const { slug } = c.req.valid("param");
    const province = await prisma.province.findUnique({
      where: { slug },
    });
    if (!province) {
      return c.json({ message: "Province not found" }, 404);
    }
    return c.json(province);
  }
);

// Get province by code
inaProvinceRoute.openapi(
  createRoute({
    method: "get",
    path: "/code/{code}",
    tags: ["Province"],
    description: "Get province by code",
    request: { params: ParamCodeSchema },
    responses: {
      200: {
        content: { "application/json": { schema: ProvinceSchema } },
        description: "Successfully get Province by code",
      },
      404: {
        description: "Province not found",
      },
    },
  }),
  async (c) => {
    const { code } = c.req.valid("param");
    const province = await prisma.province.findUnique({
      where: { code },
    });
    if (!province) {
      return c.json({ message: "Province not found" }, 404);
    }
    return c.json(province);
  }
);

// Get Province by Id
inaProvinceRoute.openapi(
  createRoute({
    method: "get",
    path: "/id/{id}",
    tags: ["Province"],
    description: "Get province by Id",
    request: { params: ParamIdSchema },
    responses: {
      200: {
        content: { "application/json": { schema: ProvinceSchema } },
        description: "Successfully get Province by Id",
      },
      404: {
        description: "Province not found",
      },
    },
  }),
  async (c) => {
    const { id } = c.req.valid("param");
    const province = await prisma.province.findUnique({
      where: { id },
    });
    if (!province) {
      return c.json({ message: "Province not found" }, 404);
    }
    return c.json(province);
  }
);
