import { z } from "zod";

export const ParamSlugSchema = z.object({
  slug: z.string().describe("Slug of the zone"),
});

export const ParamIdSchema = z.object({
  id: z
    .string()
    .transform((val) => parseInt(val, 10))
    .refine((val) => !isNaN(val), { message: "Invalid ID format" }),
});

export const ParamCodeSchema = z.object({
  code: z
    .string()
    .transform((val) => parseInt(val, 10))
    .refine((val) => !isNaN(val), { message: "Invalid Code format" }),
});

export const ParamCodeCitySchema = z.object({
  code: z.string().describe("Code of the city, example: 32.01"),
});

export const QuerySchema = z.object({
  q: z.string().optional().describe("Search query"),
});
