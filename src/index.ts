import { Hono } from "hono";
import { dataProvinces } from "@/data/province";

const app = new Hono();

app.get("/", (c) => {
  return c.json({
    message: "Hello World!",
  });
});

app.get("/api/v1/province", (c) => {
  return c.json({
    data: dataProvinces,
    message: "200 OK, Success Response",
  });
});

app.get("/api/v1/province/:id", (c) => {
  const id = c.req.param("id");
  const province = dataProvinces.find((prov) => prov.id === Number(id));
  if (!province) {
    return c.json({
      data: null,
      message: "404 Not Found",
    });
  }
  return c.json({
    data: province,
    message: "200 OK, Success Response",
  });
});

app.get("/api/v1/prov/:code-province", (c) => {
  const codeProvince = c.req.param("code-province");
  const province = dataProvinces.find(
    (prov) => prov.code_province === Number(codeProvince)
  );
  if (!province) {
    return c.json({
      data: null,
      message: "404 Not Found",
    });
  }
  return c.json({
    data: province,
    message: "200 OK, Success Response",
  });
});

app.get("/api/v1/province/:province", (c) => {
  const province = c.req.param("province"); // Ambil parameter dari URL
  console.log("Requested Province:", province);
  console.log("Data Provinces:", dataProvinces);

  const provinceData = dataProvinces.find((prov) => {
    console.log(
      "Checking:",
      prov.province.toLowerCase(),
      "===",
      province.toLowerCase()
    );
    return prov.province.toLowerCase() === province.toLowerCase();
  });

  if (!provinceData) {
    console.log("Province Not Found");
    return c.json(
      {
        data: null,
        message: "404 Not Found",
      },
      404
    );
  }

  console.log("Province Found:", provinceData);
  return c.json({
    data: provinceData,
    message: "200 OK, Success Response",
  });
});

export default app;
