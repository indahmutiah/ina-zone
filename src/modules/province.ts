import { Province } from "@prisma/client";

export type CreateProvince = Omit<Province, "id" | "createdAt" | "updatedAt">;
