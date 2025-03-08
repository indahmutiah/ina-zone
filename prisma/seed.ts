import { PrismaClient } from "@prisma/client";
import { provinces } from "@/data/provinces";

const prisma = new PrismaClient();

async function main() {
  for (const province of provinces) {
    await prisma.province.upsert({
      where: { slug: province.slug },
      update: province,
      create: province,
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
