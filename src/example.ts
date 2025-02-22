import * as pg from "pg";

const client = new pg.Client({
  connectionString: process.env.DATABASE_URL,
});

await client.connect();

type Provinces = {
  id: number;
  code: string;
  slug: string;
  name: string;
};

type Cities = {
  id: number;
  code: string;
  slug: string;
  name: string;
  provinceId: number;
};

try {
  const res_provinces = await client.query("SELECT * FROM provinces");
  const provinces: Provinces[] = res_provinces.rows;
  console.log({ provinces });

  const res_cities = await client.query("SELECT * FROM cities");
  const cities: Cities[] = res_cities.rows;
  // console.log({ cities: cities });
} catch (error) {}

await client.end();
