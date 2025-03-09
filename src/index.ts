import { Hono } from "hono";
import { provinceRoute } from "@/routes/province";
import { citiesRoute } from "@/routes/city";

const app = new Hono();

app.get("/", (c) => {
  return c.json({
    message: "INA ZONE API",
  });
});

app.route("/api/provinces", provinceRoute);
app.route("/api/cities", citiesRoute);

export default app;
