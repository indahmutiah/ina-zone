-- DropForeignKey
ALTER TABLE "City" DROP CONSTRAINT "City_provinceId_fkey";

-- AlterTable
ALTER TABLE "City" ALTER COLUMN "provinceId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "City" ADD CONSTRAINT "City_provinceId_fkey" FOREIGN KEY ("provinceId") REFERENCES "Province"("id") ON DELETE SET NULL ON UPDATE CASCADE;
