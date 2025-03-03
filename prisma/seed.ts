import { PrismaClient } from "@prisma/client";
import { provinces } from "@/data/provinces";

const prisma = new PrismaClient();

async function main() {
  for (const province of provinces) {
    const upsertedProvince = await prisma.province.upsert({
      where: { slug: province.slug },
      update: province,
      create: province,
    });

    console.log(`Province: ${upsertedProvince.name}`);
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
