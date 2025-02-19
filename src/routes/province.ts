import { provinces } from "@/data/province";
import { type Province } from "@/types/zone";
import { Hono } from "hono";

let dataProvinces = provinces;

export const provinceRoute = new Hono();

// Get All Provinces
provinceRoute.get("/", (c) => {
  return c.json({
    message: "Get All Provinces",
    data: dataProvinces,
  });
});

// Get Province By Id
provinceRoute.get("/:id", (c) => {
  const id = c.req.param("id");
  const province = dataProvinces.find((province) => province.id === Number(id));

  if (!province) {
    return c.json({ message: "Province not found" }, 404);
  }

  return c.json({
    message: "Get Province By Id",
    data: province,
  });
});

// Get Province By Code
provinceRoute.get("/code/:code", (c) => {
  const code = c.req.param("code");
  const province = dataProvinces.find(
    (province) => province.code === Number(code)
  );

  if (!province) {
    return c.json({ message: "Province not found" }, 404);
  }

  return c.json({
    message: "Get Province By Code",
    data: province,
  });
});

// Get Province By Slug
provinceRoute.get("/slug/:slug", (c) => {
  const slug = c.req.param("slug");
  const province = dataProvinces.find((province) => {
    return province.slug.toLowerCase() === slug.toLowerCase();
  });

  if (!province) {
    return c.json({ message: "Province not found" }, 404);
  }

  return c.json({
    message: "Get Province By Slug",
    data: province,
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
