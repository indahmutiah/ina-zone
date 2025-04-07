/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `City` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "City" ALTER COLUMN "code" SET DATA TYPE VARCHAR(255);

-- CreateIndex
CREATE UNIQUE INDEX "City_code_key" ON "City"("code");
