/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `City` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `City` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `City` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[code]` on the table `District` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `District` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `District` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[code]` on the table `Province` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `Province` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Province` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[code]` on the table `Subdistrict` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `Subdistrict` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Subdistrict` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "City_code_key" ON "City"("code");

-- CreateIndex
CREATE UNIQUE INDEX "City_slug_key" ON "City"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "City_name_key" ON "City"("name");

-- CreateIndex
CREATE UNIQUE INDEX "District_code_key" ON "District"("code");

-- CreateIndex
CREATE UNIQUE INDEX "District_slug_key" ON "District"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "District_name_key" ON "District"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Province_code_key" ON "Province"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Province_slug_key" ON "Province"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Province_name_key" ON "Province"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Subdistrict_code_key" ON "Subdistrict"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Subdistrict_slug_key" ON "Subdistrict"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Subdistrict_name_key" ON "Subdistrict"("name");
