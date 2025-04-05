import { Province } from "@prisma/client";

type DataProvince = Omit<Province, "id" | "createdAt" | "updatedAt">;

export const provinces: DataProvince[] = [
  {
    code: 11,
    slug: "aceh",
    name: "Aceh",
  },
  {
    code: 12,
    slug: "sumatera-utara",
    name: "Sumatera Utara",
  },
  {
    code: 13,
    slug: "sumatera-barat",
    name: "Sumater Barat",
  },
  {
    code: 14,
    slug: "riau",
    name: "Riau",
  },
  {
    code: 15,
    slug: "jambi",
    name: "Jambi",
  },
  {
    code: 16,
    slug: "sumatera-selatan",
    name: "Sumatera Selatan",
  },
  {
    code: 17,
    slug: "bengkulu",
    name: "Bengkulu",
  },
  {
    code: 18,
    slug: "lampung",
    name: "Lampung",
  },
  {
    code: 19,
    slug: "kepulauan-bangka-belitung",
    name: "Kepulauan Bangka Belitung",
  },
  {
    code: 21,
    slug: "kepulauan-riau",
    name: "Kepulauan Riau",
  },
  {
    code: 31,
    slug: "dki-jakarta",
    name: "DKI Jakarta",
  },
  {
    code: 32,
    slug: "jawa-barat",
    name: "Jawa Barat",
  },
  {
    code: 33,
    slug: "jawa-tengah",
    name: "Jawa Tengah",
  },
  {
    code: 34,
    slug: "di-yogyakarta",
    name: "Daerah Istimewa Yogyakarta",
  },
  {
    code: 35,
    slug: "jawa-timur",
    name: "Jawa Timur",
  },
  {
    code: 36,
    slug: "banten",
    name: "Banten",
  },
  {
    code: 51,
    slug: "bali",
    name: "Bali",
  },
  {
    code: 52,
    slug: "nusa-tenggara-barat",
    name: "Nusa Tenggara Barat",
  },
  {
    code: 53,
    slug: "nusa-tenggara-timur",
    name: "Nuasa Tenggara Timur",
  },
  {
    code: 61,
    slug: "kalimantan-barat",
    name: "Kalimantan Barat",
  },
  {
    code: 62,
    slug: "kalimantan-tengah",
    name: "Kalimantan Tengah",
  },
  {
    code: 63,
    slug: "kalimantan-selatan",
    name: "Kalimantan Selatan",
  },
  {
    code: 64,
    slug: "kalimantan-timur",
    name: "Kalimantan Timur",
  },
  {
    code: 65,
    slug: "kalimantan-utara",
    name: "Kalimantan Utara",
  },
  {
    code: 71,
    slug: "sulawesi-utara",
    name: "Sulawesi Utara",
  },
  {
    code: 72,
    slug: "sulawesi-tengah",
    name: "Sulawesi Tengah",
  },
  {
    code: 73,
    slug: "sulawesi-selatan",
    name: "Sulawesi Selatan",
  },
  {
    code: 74,
    slug: "sulawesi-tenggara",
    name: "Sulawesi Tenggara",
  },
  {
    code: 75,
    slug: "gorontalo",
    name: "Gorontalo",
  },
  {
    code: 76,
    slug: "sulawesi-barat",
    name: "Sulawesi Barat",
  },
  {
    code: 81,
    slug: "maluku",
    name: "Maluku",
  },
  {
    code: 82,
    slug: "maluku-utara",
    name: "Maluku Utara",
  },
  {
    code: 91,
    slug: "papua",
    name: "Papua",
  },
  {
    code: 92,
    slug: "papua-barat",
    name: "Papua Barat",
  },
  {
    code: 93,
    slug: "papua-selatan",
    name: "Papua Selatan",
  },
  {
    code: 94,
    slug: "papua-tengah",
    name: "Papua Tengah",
  },
  {
    code: 95,
    slug: "papua-pegunungan",
    name: "Papua Pegunungan",
  },
  {
    code: 96,
    slug: "papua-barat-daya",
    name: "Papua Barat Daya",
  },
];
