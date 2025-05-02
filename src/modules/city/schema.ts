import { z } from "@hono/zod-openapi";

export const CitySchema = z.object({
  id: z.number(),
  code: z.string(),
  slug: z.string(),
  name: z.string(),
  provinceId: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const CityListSchema = z.array(CitySchema);
