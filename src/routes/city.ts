import { Hono } from "hono";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ["query"],
});

export const citiesRoute = new Hono();

// Get All Cities from Database prisma
citiesRoute.get("/", async (c) => {
  const resultCities = await prisma.city.findMany({
    include: {
      province: true,
    },
  });
  return c.json({
    message: "Get All Cities",
    data: resultCities,
  });
});

// Get City By Id
citiesRoute.get("/:id", async (c) => {
  const id = c.req.param("id");
  try {
    const resultCity = await prisma.city.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        province: true,
      },
    });

    if (resultCity === null) {
      return c.json({ message: "City not found" }, 404);
    }

    return c.json({
      message: "Get City By Id",
      data: resultCity,
    });
  } catch (error) {
    return c.json({ message: "Internal Server Error" }, 500);
  }
});

// Get City By Code
citiesRoute.get("/code/:code", async (c) => {
  const code = c.req.param("code");
  const resultCity = await prisma.city.findFirst({
    where: {
      code: Number(code),
    },
    include: {
      province: true,
    },
  });

  if (!resultCity) {
    return c.json({ message: "City not found" }, 404);
  }

  return c.json({
    message: "Get City By Code",
    data: resultCity,
  });
});

// Get City By Slug
citiesRoute.get("/slug/:slug", async (c) => {
  const slug = c.req.param("slug");
  const resultCity = await prisma.city.findFirst({
    where: {
      slug: slug.toLowerCase(),
    },
    include: {
      province: true,
    },
  });

  if (!resultCity) {
    return c.json({ message: "City not found" }, 404);
  }

  return c.json({
    message: "Get City By Slug",
    data: resultCity,
  });
});
