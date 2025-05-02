import { z } from "@hono/zod-openapi";

export const ProvinceSchema = z.object({
  id: z.number(),
  code: z.number(),
  slug: z.string(),
  name: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const ProvinceListSchema = z.array(ProvinceSchema);
