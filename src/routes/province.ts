import { Hono } from "hono";
import { PrismaClient } from "@prisma/client";
import { CreateProvince } from "@/modules/province/type";

const prisma = new PrismaClient({
  log: ["query"],
});

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
  const id = Number(c.req.param("id"));
  try {
    const resultProvince = await prisma.province.findUnique({
      where: { id },
      include: {
        cities: true,
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
    return c.json({ message: "Failed to get province by id" }, 500);
  }
});

// Get Province By Code
provinceRoute.get("/code/:code", async (c) => {
  const code = Number(c.req.param("code"));
  const resultProvince = await prisma.province.findFirst({
    where: { code },
    include: {
      cities: true,
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
    include: {
      cities: true,
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
  try {
    const body: CreateProvince = await c.req.json();

    const findDuplicateProvince = await prisma.province.findFirst({
      where: {
        name: {
          equals: body.name,
          mode: "insensitive",
        },
      },
    });

    if (findDuplicateProvince) {
      return c.json({ message: "Province already exists" }, 409);
    }

    const newProvince = await prisma.province.create({
      data: body,
    });

    return c.json({
      message: "Province created successfully",
      data: newProvince,
    });
  } catch (error) {
    console.error(error);
    return c.json({ message: "Failed to create province", error }, 500);
  }
});

// Delete Province By Id
provinceRoute.delete("/:id", async (c) => {
  const id = Number(c.req.param("id"));
  const foundProvince = await prisma.province.findFirst({
    where: { id },
  });

  if (!foundProvince) {
    return c.json({ message: "Province not found" }, 404);
  }
  await prisma.province.delete({
    where: { id },
  });

  return c.json({
    message: "Province deleted successfully",
    data: foundProvince,
  });
});

// Update Province By Id
provinceRoute.patch("/:id", async (c) => {
  const id = Number(c.req.param("id"));
  const body = await c.req.json();

  const foundProvince = await prisma.province.findUnique({
    where: { id },
  });

  if (!foundProvince) {
    return c.json({ message: "Province not found" }, 404);
  }

  const updatedProvinces = await prisma.province.update({
    where: { id },
    data: foundProvince,
  });

  return c.json({
    message: "Province updated successfully",
    data: updatedProvinces,
  });
});

// Update Province By Id, Create if not exist
provinceRoute.put("/:id", async (c) => {
  const id = Number(c.req.param("id"));
  const body = await c.req.json();
  const foundProvince = await prisma.province.findUnique({
    where: { id },
  });

  if (!foundProvince) {
    const newProvince = await prisma.province.create({
      data: body,
    });

    return c.json({
      message: "Province created successfully",
      data: newProvince,
    });
  }
  const updatedProvince = await prisma.province.update({
    where: { id },
    data: {
      ...foundProvince,
      ...body,
    },
  });

  return c.json({
    message: "Province updated successfully",
    data: updatedProvince,
  });
});
