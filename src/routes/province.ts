import { provinces } from "@/data/province";
import { Hono } from "hono";

// TODO: Data provinces can be updated
let dataProvinces = provinces;

export const provinceRoute = new Hono();

provinceRoute.get("/", (c) => {
  return c.json({
    message: "Get all provinces",
    data: provinces,
  });
});

provinceRoute.get("/:id", (c) => {
  const id = c.req.param("id");
  const province = provinces.find((prov) => prov.id === Number(id));

  if (!province) {
    return c.json({
      data: null,
      message: "404 Not Found",
    });
  }

  return c.json({
    message: "Get province by id",
    data: province,
  });
});

provinceRoute.get("/code/:code", (c) => {
  const code = c.req.param("code");

  console.log({ code });

  const province = provinces.find((province) => province.code === Number(code));

  if (!province) {
    return c.json({
      message: "404 Not Found",
      data: null,
    });
  }

  return c.json({
    message: "Get province by code",
    data: province,
  });
});

provinceRoute.get("/slug/:slug", (c) => {
  const slug = c.req.param("slug");

  const province = provinces.find((province) => {
    return province.slug.toLowerCase() === slug.toLowerCase();
  });

  if (!province) {
    return c.json({ message: "Province not found", data: null }, 404);
  }

  return c.json({
    message: "Get province by slug",
    data: province,
  });
});
