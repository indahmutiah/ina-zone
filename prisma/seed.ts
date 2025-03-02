import { PrismaClient } from "@prisma/client";
import { createReadStream } from "fs";
import * as csvParser from "csv-parser";

const prisma = new PrismaClient();

async function main() {
  const results: { id: number; code: number; slug: string; name: string }[] =
    [];

  await new Promise((resolve, reject) => {
    createReadStream("src/data/provinces_db.csv")
      .pipe(csvParser())
      .on("data", (data) => {
        results.push({
          id: Number(data.id),
          code: Number(data.code),
          name: data.name,
          slug: data.slug,
        });
      })
      .on("end", resolve)
      .on("error", reject);
  });
  for (const result of results) {
    await prisma.province.create({
      data: result,
    });
  }
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
