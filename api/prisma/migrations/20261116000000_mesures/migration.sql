-- CreateTable
CREATE TABLE "Mesure" (
    "id" SERIAL NOT NULL,
    "indicateur" TEXT NOT NULL,
    "periode" DATE NOT NULL,
    "valeur" INTEGER NOT NULL,

    CONSTRAINT "Mesure_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Mesure_indicateur_periode_key" ON "Mesure"("indicateur", "periode");
