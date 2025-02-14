import { provinces } from "@/data/province";
import { Province } from "@/types/province";
import { Hono } from "hono";

let dataProvince = provinces;

export const provinceRoute = new Hono();

// Get All Provinces
provinceRoute.get("/", (c) => {
  return c.json({
    message: "Get All Provinces",
    data: dataProvince,
  });
});

// Get Province By Id
provinceRoute.get("/:id", (c) => {
  const id = c.req.param("id");
  const province = dataProvince.find((province) => province.id === Number(id));

  if (!province) {
    return c.json({
      message: "404 Not Found",
      data: null,
    });
  }

  return c.json({
    message: "Get Province By Id",
    data: province,
  });
});

// Get Province By Code
provinceRoute.get("/code/:code", (c) => {
  const code = c.req.param("code");
  const province = dataProvince.find(
    (province) => province.code === Number(code)
  );

  if (!province) {
    return c.json({
      message: "404 Not Found",
      data: null,
    });
  }

  return c.json({
    message: "Get Province By Code",
    data: province,
  });
});

// Get Province By Slug
provinceRoute.get("/slug/:slug", (c) => {
  const slug = c.req.param("slug");
  const province = dataProvince.find((province) => {
    return province.slug.toLowerCase() === slug.toLowerCase();
  });

  if (!province) {
    return c.json({
      message: "404 Not Found",
      data: null,
    });
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

  const findDuplicateProvince = dataProvince.find(
    (province) => province.name.toLowerCase() === body.name.toLowerCase()
  );

  if (findDuplicateProvince) {
    return c.json(
      {
        message: "Province already exists",
        data: null,
      },
      409
    );
  }

  const newProvince: Province = {
    id: dataProvince[dataProvince.length - 1].id + 1,
    ...body,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const updatedProvince = [...dataProvince, newProvince];
  dataProvince = updatedProvince;

  return c.json({
    message: "Province created successfully",
    data: newProvince,
  });
});

// Delete Province By Id
provinceRoute.delete("/:id", async (c) => {
  const id = c.req.param("id");
  const foundProvince = dataProvince.find(
    (province) => province.id === Number(id)
  );

  if (!foundProvince) {
    return c.json(
      {
        message: "404 Not Found",
        data: null,
      },
      404
    );
  }
  const updatedProvince = dataProvince.filter(
    (province) => province.id !== Number(id)
  );
  dataProvince = updatedProvince;

  return c.json({
    message: "Province deleted successfully",
    data: foundProvince,
  });
});

// Update Province By Id
provinceRoute.patch("/:id", async (c) => {
  const id = c.req.param("id");
  const foundProvince = dataProvince.find(
    (province) => province.id === Number(id)
  );

  if (!foundProvince) {
    return c.json(
      {
        message: "404 Not Found",
        data: null,
      },
      404
    );
  }

  const body = await c.req.json();
  const updatedProvince = {
    ...foundProvince,
    ...body,
    updatedAt: new Date(),
  };

  const updatedProvinces = dataProvince.map((province) =>
    province.id === Number(id) ? updatedProvince : province
  );
  dataProvince = updatedProvinces;

  return c.json({
    message: "Province updated successfully",
    data: updatedProvince,
  });
});

// Update Province By Id, Create if not exist
provinceRoute.put("/:id", async (c) => {
  const id = c.req.param("id");
  const body = await c.req.json();
  const foundProvince = dataProvince.find(
    (province) => province.id === Number(id)
  );

  if (!foundProvince) {
    const newProvince: Province = {
      id: dataProvince[dataProvince.length - 1].id + 1,
      ...body,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const updatedProvince = [...dataProvince, newProvince];

    return c.json({
      message: "Province created successfully",
      data: updatedProvince,
    });
  }
  const updatedProvince = dataProvince.map((province) =>
    province.id === Number(id)
      ? { ...foundProvince, ...body, updatedAt: new Date() }
      : province
  );
  dataProvince = updatedProvince;

  return c.json({
    message: "Province updated successfully",
    data: updatedProvince,
  });
});
