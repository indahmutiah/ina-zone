import { inaCityRoute } from "@/routes/ina-city";
import { OpenAPIHono } from "@hono/zod-openapi";
import { Scalar } from "@scalar/hono-api-reference";
import { cors } from "hono/cors";
import { inaProvinceRoute } from "./routes/ina-province";

const app = new OpenAPIHono();
app.use(cors());

app.doc("/openapi.json", {
  openapi: "3.0.0",
  info: {
    title: "INA Zone API",
    description:
      "OpenAPI for Indonesian Provinces and Cities. \n\nThis API provides information about 38 provinces and 514 cities in Indonesia. \n\nThe API is built using Bun, TypeScript, and Prisma.",
    contact: {
      url: "https://github.com/indahmutiah/ina-zone",
      name: "Indah Mutiah MZ",
    },
    version: "1.0.0",
  },
});

app.route("/api/province", inaProvinceRoute);
app.route("/api/city", inaCityRoute);

app.get("/", Scalar({ url: "/openapi.json" }));

export default app;
