/*
  Warnings:

  - You are about to drop the column `lovNummer` on the `legislative-proposal` table. All the data in the column will be lost.
  - You are about to drop the column `lovNummerdato` on the `legislative-proposal` table. All the data in the column will be lost.
  - Added the required column `lovnummer` to the `legislative-proposal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lovnummerdato` to the `legislative-proposal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "legislative-proposal" DROP COLUMN "lovNummer",
DROP COLUMN "lovNummerdato",
ADD COLUMN     "lovnummer" TEXT NOT NULL,
ADD COLUMN     "lovnummerdato" TIMESTAMP(3) NOT NULL;
