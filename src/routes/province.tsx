import { provinces } from "@/data/province";
import { Hono } from "hono";

let dataProvince = provinces;

export const provinceRoute = new Hono();

// Get All Provinces
provinceRoute.get("/", (c) => {
  return c.json({
    message: "Get All Provinces",
    data: provinces,
  });
});

// Get Province By Id
provinceRoute.get("/:id", (c) => {
  const id = c.req.param("id");
  const province = provinces.find((province) => province.id === Number(id));

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
  const province = provinces.find((province) => province.code === Number(code));

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
  const province = provinces.find((province) => {
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
