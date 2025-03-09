import { PrismaClient } from "@prisma/client";
import { provinces } from "@/data/provinces";
import { cities } from "@/data/cities";

const prisma = new PrismaClient();

async function main() {
  await prisma.province.createMany({
    data: provinces,
    skipDuplicates: true,
  });

  const existingProvinces = await prisma.province.findMany();
  const provinceMap = Object.fromEntries(
    existingProvinces.map((province) => [province.id, province.id])
  );

  const city = cities.map((city) => ({
    ...city,
    provinceId: provinceMap[city.provinceId],
  }));
  if (city.length > 0) {
    await prisma.city.createMany({
      data: city,
      skipDuplicates: true,
    });
  } else {
    console.error("No valid cities found, check provinceId mapping!");
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
