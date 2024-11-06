/*
  Warnings:

  - You are about to drop the column `afgoerelsesDato` on the `legislative-proposal` table. All the data in the column will be lost.
  - You are about to drop the column `afgoerelsesResultatKode` on the `legislative-proposal` table. All the data in the column will be lost.
  - You are about to drop the column `afstemningsKonklusion` on the `legislative-proposal` table. All the data in the column will be lost.
  - You are about to drop the column `baggrundsMateriale` on the `legislative-proposal` table. All the data in the column will be lost.
  - You are about to drop the column `deltUnderSagId` on the `legislative-proposal` table. All the data in the column will be lost.
  - You are about to drop the column `fremsatUnderSagId` on the `legislative-proposal` table. All the data in the column will be lost.
  - You are about to drop the column `kategoriId` on the `legislative-proposal` table. All the data in the column will be lost.
  - You are about to drop the column `lovNummerDato` on the `legislative-proposal` table. All the data in the column will be lost.
  - You are about to drop the column `nummerNumerisk` on the `legislative-proposal` table. All the data in the column will be lost.
  - You are about to drop the column `nummerPostfix` on the `legislative-proposal` table. All the data in the column will be lost.
  - You are about to drop the column `nummerPrefix` on the `legislative-proposal` table. All the data in the column will be lost.
  - You are about to drop the column `offentlighedsKode` on the `legislative-proposal` table. All the data in the column will be lost.
  - You are about to drop the column `opdateringsDato` on the `legislative-proposal` table. All the data in the column will be lost.
  - You are about to drop the column `paragrafNummer` on the `legislative-proposal` table. All the data in the column will be lost.
  - You are about to drop the column `periodeId` on the `legislative-proposal` table. All the data in the column will be lost.
  - You are about to drop the column `raadsmodeDato` on the `legislative-proposal` table. All the data in the column will be lost.
  - You are about to drop the column `retsinformationsUrl` on the `legislative-proposal` table. All the data in the column will be lost.
  - You are about to drop the column `statsBudgetSag` on the `legislative-proposal` table. All the data in the column will be lost.
  - You are about to drop the column `statusId` on the `legislative-proposal` table. All the data in the column will be lost.
  - You are about to drop the column `titelKort` on the `legislative-proposal` table. All the data in the column will be lost.
  - You are about to drop the column `typeId` on the `legislative-proposal` table. All the data in the column will be lost.
  - Added the required column `kategoriid` to the `legislative-proposal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lovNummerdato` to the `legislative-proposal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nummernumerisk` to the `legislative-proposal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nummerprefix` to the `legislative-proposal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `offentlighedskode` to the `legislative-proposal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `opdateringsdato` to the `legislative-proposal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `periodeid` to the `legislative-proposal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `statsbudgetsag` to the `legislative-proposal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `statusid` to the `legislative-proposal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titelkort` to the `legislative-proposal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `typeid` to the `legislative-proposal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "legislative-proposal" DROP COLUMN "afgoerelsesDato",
DROP COLUMN "afgoerelsesResultatKode",
DROP COLUMN "afstemningsKonklusion",
DROP COLUMN "baggrundsMateriale",
DROP COLUMN "deltUnderSagId",
DROP COLUMN "fremsatUnderSagId",
DROP COLUMN "kategoriId",
DROP COLUMN "lovNummerDato",
DROP COLUMN "nummerNumerisk",
DROP COLUMN "nummerPostfix",
DROP COLUMN "nummerPrefix",
DROP COLUMN "offentlighedsKode",
DROP COLUMN "opdateringsDato",
DROP COLUMN "paragrafNummer",
DROP COLUMN "periodeId",
DROP COLUMN "raadsmodeDato",
DROP COLUMN "retsinformationsUrl",
DROP COLUMN "statsBudgetSag",
DROP COLUMN "statusId",
DROP COLUMN "titelKort",
DROP COLUMN "typeId",
ADD COLUMN     "afgoerelsesdato" TIMESTAMP(3),
ADD COLUMN     "afgoerelsesresultatkode" TEXT,
ADD COLUMN     "afstemningskonklusion" TEXT,
ADD COLUMN     "baggrundsmateriale" TEXT,
ADD COLUMN     "deltundersagid" INTEGER,
ADD COLUMN     "fremsatundersagid" INTEGER,
ADD COLUMN     "kategoriid" INTEGER NOT NULL,
ADD COLUMN     "lovNummerdato" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "nummernumerisk" TEXT NOT NULL,
ADD COLUMN     "nummerpostfix" TEXT,
ADD COLUMN     "nummerprefix" TEXT NOT NULL,
ADD COLUMN     "offentlighedskode" TEXT NOT NULL,
ADD COLUMN     "opdateringsdato" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "paragrafnummer" TEXT,
ADD COLUMN     "periodeid" INTEGER NOT NULL,
ADD COLUMN     "raadsmodedato" TIMESTAMP(3),
ADD COLUMN     "retsinformationsurl" TEXT,
ADD COLUMN     "statsbudgetsag" BOOLEAN NOT NULL,
ADD COLUMN     "statusid" INTEGER NOT NULL,
ADD COLUMN     "titelkort" TEXT NOT NULL,
ADD COLUMN     "typeid" INTEGER NOT NULL;
