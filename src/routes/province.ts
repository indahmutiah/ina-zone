import { Hono } from "hono";
import { PrismaClient, type Province } from "@prisma/client";

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
  try {
    const body: Omit<Province, "id" | "createdAt" | "updatedAt"> =
      await c.req.json();
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
      data: {
        code: body.code,
        name: body.name,
        slug: body.slug,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    return c.json({
      message: "Province created successfully",
      data: newProvince,
    });
  } catch (error) {
    console.error(error);
    return c.json({ message: "Internal Server Error", error }, 500);
  }
});

// Delete Province By Id
provinceRoute.delete("/:id", async (c) => {
  const id = c.req.param("id");
  const foundProvince = await prisma.province.findFirst({
    where: {
      id: Number(id),
    },
  });

  if (!foundProvince) {
    return c.json({ message: "Province not found" }, 404);
  }
  await prisma.province.delete({
    where: {
      id: Number(id),
    },
  });

  return c.json({
    message: "Province deleted successfully",
    data: foundProvince,
  });
});

// Update Province By Id
provinceRoute.patch("/:id", async (c) => {
  const id = c.req.param("id");
  const body = await c.req.json();

  const foundProvince = await prisma.province.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!foundProvince) {
    return c.json({ message: "Province not found" }, 404);
  }

  const updatedProvinces = await prisma.province.update({
    where: {
      id: Number(id),
    },
    data: {
      ...foundProvince,
      ...body,
      updatedAt: new Date(),
    },
  });

  return c.json({
    message: "Province updated successfully",
    data: updatedProvinces,
  });
});

// Update Province By Id, Create if not exist
provinceRoute.put("/:id", async (c) => {
  const id = c.req.param("id");
  const body = await c.req.json();
  const foundProvince = await prisma.province.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!foundProvince) {
    const newProvince = await prisma.province.create({
      data: {
        ...body,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    return c.json({
      message: "Province created successfully",
      data: newProvince,
    });
  }
  const updatedProvince = await prisma.province.update({
    where: {
      id: Number(id),
    },
    data: {
      ...foundProvince,
      ...body,
      updatedAt: new Date(),
    },
  });

  return c.json({
    message: "Province updated successfully",
    data: updatedProvince,
  });
});
