/*
  Warnings:

  - Made the column `provinceId` on table `City` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "City" DROP CONSTRAINT "City_provinceId_fkey";

-- AlterTable
ALTER TABLE "City" ALTER COLUMN "provinceId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "City" ADD CONSTRAINT "City_provinceId_fkey" FOREIGN KEY ("provinceId") REFERENCES "Province"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
