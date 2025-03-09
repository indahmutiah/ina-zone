import { PrismaClient } from "@prisma/client";
import { provinces } from "@/data/provinces";
import { cities } from "@/data/cities";

const prisma = new PrismaClient();

// async function main() {
//   await prisma.province.createMany({
//     data: provinces,
//     skipDuplicates: true,
//   });

//   const existingProvinces = await prisma.province.findMany();

//   const provinceMap = Object.fromEntries(
//     existingProvinces.map((province) => [province.id, province.id])
//   );

//   const city = cities.map((city) => ({
//     ...city,
//     provinceId: provinceMap[city.provinceId],
//   }));

//   if (city.length > 0) {
//     await prisma.city.createMany({
//       data: city,
//       skipDuplicates: true,
//     });
//   } else {
//     console.error("No valid cities found, check provinceId mapping!");
//   }
// }

async function simplerMain() {
  for (const province of provinces) {
    const resultProvince = await prisma.province.upsert({
      where: { slug: province.slug },
      create: province,
      update: province,
    });

    console.log(`Province: ${resultProvince.name}`);
  }

  for (const city of cities) {
    const { provinceId, provinceSlug, ...cityData } = city;

    if (!provinceSlug) {
      continue;
    }

    const resultCity = await prisma.city.upsert({
      where: { slug: cityData.slug },
      create: {
        ...cityData,
        province: { connect: { slug: provinceSlug } }, // id / slug / code
      },
      update: {
        ...cityData,
        province: { connect: { slug: provinceSlug } },
      },
    });

    console.log(`City: ${resultCity.name}`);
  }
}

simplerMain()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
