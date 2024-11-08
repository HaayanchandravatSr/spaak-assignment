-- CreateTable
CREATE TABLE "legislative-proposal" (
    "id" INTEGER NOT NULL,
    "typeId" INTEGER NOT NULL,
    "kategoriId" INTEGER NOT NULL,
    "statusId" INTEGER NOT NULL,
    "titel" TEXT NOT NULL,
    "titelKort" TEXT NOT NULL,
    "offentlighedsKode" TEXT NOT NULL,
    "nummer" TEXT NOT NULL,
    "nummerPrefix" TEXT NOT NULL,
    "nummerNumerisk" TEXT NOT NULL,
    "nummerPostfix" TEXT,
    "resume" TEXT NOT NULL,
    "afstemningsKonklusion" TEXT,
    "periodeId" INTEGER NOT NULL,
    "afgoerelsesResultatKode" TEXT,
    "baggrundsMateriale" TEXT,
    "opdateringsDato" TIMESTAMP(3) NOT NULL,
    "statsBudgetSag" BOOLEAN NOT NULL,
    "begrundelse" TEXT,
    "paragrafNummer" TEXT,
    "paragraf" TEXT,
    "afgoerelsesDato" TIMESTAMP(3),
    "afgoerelse" TEXT,
    "raadsmodeDato" TIMESTAMP(3),
    "lovNummer" TEXT NOT NULL,
    "lovNummerDato" TIMESTAMP(3) NOT NULL,
    "retsinformationsUrl" TEXT,
    "fremsatUnderSagId" INTEGER,
    "deltUnderSagId" INTEGER,

    CONSTRAINT "legislative-proposal_pkey" PRIMARY KEY ("id")
);
