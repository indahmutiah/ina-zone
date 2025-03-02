import { provinces } from "@/data/province";
import { type Province } from "@/types/zone";
import { Hono } from "hono";
import * as pg from "pg";
import { PrismaClient } from "@prisma/client";
import app from "..";

const prisma = new PrismaClient({
  log: ["query"],
});

let dataProvinces = provinces;

const client = new pg.Client({
  connectionString: process.env.DATABASE_URL,
});

await client.connect();

export const provinceRoute = new Hono();

// Get All Provinces from Database prisma
provinceRoute.get("/", async (c) => {
  const resultProvinces = await prisma.province.findMany();
  return c.json({
    message: "Get All Provinces",
    data: resultProvinces,
  });
});

// Get Province By Id
provinceRoute.get("/:id", async (c) => {
  const id = c.req.param("id");
  try {
    const resultProvince = await prisma.province.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (resultProvince === null) {
      return c.json({ message: "Province not found" }, 404);
    }

    return c.json({
      message: "Get Province By Id",
      data: resultProvince,
    });
  } catch (error) {
    return c.json({ message: "Internal Server Error" }, 500);
  }
});

// Get Province By Code
provinceRoute.get("/code/:code", async (c) => {
  const code = c.req.param("code");
  const resultProvince = await prisma.province.findFirst({
    where: {
      code: Number(code),
    },
  });

  if (!resultProvince) {
    return c.json({ message: "Province not found" }, 404);
  }

  return c.json({
    message: "Get Province By Code",
    data: resultProvince,
  });
});

// Get Province By Slug
provinceRoute.get("/slug/:slug", async (c) => {
  const slug = c.req.param("slug");
  const resultProvince = await prisma.province.findFirst({
    where: {
      slug: slug.toLowerCase(),
    },
  });

  if (!resultProvince) {
    return c.json({ message: "Province not found" }, 404);
  }

  return c.json({
    message: "Get Province By Slug",
    data: resultProvince,
  });
});

// Create Province
provinceRoute.post("/create", async (c) => {
  const body: Omit<Province, "id" | "createdAt" | "updatedAt"> =
    await c.req.json();

  const findDuplicateProvince = dataProvinces.find(
    (province) => province.name.toLowerCase() === body.name.toLowerCase()
  );

  if (findDuplicateProvince) {
    return c.json({ message: "Province already exists" }, 409);
  }

  const newProvince: Province = {
    id: dataProvinces[dataProvinces.length - 1].id + 1,
    ...body,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const updatedProvince = [...dataProvinces, newProvince];
  dataProvinces = updatedProvince;

  return c.json({
    message: "Province created successfully",
    data: newProvince,
  });
});

// Delete Province By Id
provinceRoute.delete("/:id", async (c) => {
  const id = c.req.param("id");
  const foundProvince = dataProvinces.find(
    (province) => province.id === Number(id)
  );

  if (!foundProvince) {
    return c.json({ message: "Province not found" }, 404);
  }
  const updatedProvince = dataProvinces.filter(
    (province) => province.id !== Number(id)
  );
  dataProvinces = updatedProvince;

  return c.json({
    message: "Province deleted successfully",
    data: foundProvince,
  });
});

// Update Province By Id
provinceRoute.patch("/:id", async (c) => {
  const id = c.req.param("id");
  const foundProvince = dataProvinces.find(
    (province) => province.id === Number(id)
  );

  if (!foundProvince) {
    return c.json({ message: "Province not found" }, 404);
  }

  const body = await c.req.json();
  const updatedProvince = {
    ...foundProvince,
    ...body,
    updatedAt: new Date(),
  };

  const updatedProvinces = dataProvinces.map((province) =>
    province.id === Number(id) ? updatedProvince : province
  );
  dataProvinces = updatedProvinces;

  return c.json({
    message: "Province updated successfully",
    data: updatedProvince,
  });
});

// Update Province By Id, Create if not exist
provinceRoute.put("/:id", async (c) => {
  const id = c.req.param("id");
  const body = await c.req.json();
  const foundProvince = dataProvinces.find(
    (province) => province.id === Number(id)
  );

  if (!foundProvince) {
    const newProvince: Province = {
      id: dataProvinces[dataProvinces.length - 1].id + 1,
      ...body,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const updatedProvince = [...dataProvinces, newProvince];

    return c.json({
      message: "Province created successfully",
      data: updatedProvince,
    });
  }
  const updatedProvince = dataProvinces.map((province) =>
    province.id === Number(id)
      ? { ...foundProvince, ...body, updatedAt: new Date() }
      : province
  );
  dataProvinces = updatedProvince;

  return c.json({
    message: "Province updated successfully",
    data: updatedProvince,
  });
});
