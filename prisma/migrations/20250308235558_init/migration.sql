-- CreateTable
CREATE TABLE "Province" (
    "id" SERIAL NOT NULL,
    "code" INTEGER NOT NULL,
    "slug" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Province_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "City" (
    "id" SERIAL NOT NULL,
    "code" INTEGER NOT NULL,
    "slug" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "provinceId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "City_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Province_code_key" ON "Province"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Province_slug_key" ON "Province"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Province_name_key" ON "Province"("name");

-- CreateIndex
CREATE UNIQUE INDEX "City_slug_key" ON "City"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "City_name_key" ON "City"("name");

-- AddForeignKey
ALTER TABLE "City" ADD CONSTRAINT "City_provinceId_fkey" FOREIGN KEY ("provinceId") REFERENCES "Province"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
