import { Hono } from "hono";
import { provinceRoute } from "./routes/province";

const app = new Hono();

app.get("/", (c) => {
  return c.json({
    message: "INA ZONE API",
  });
});

app.route("/api/v1/provinces", provinceRoute);

export default app;
