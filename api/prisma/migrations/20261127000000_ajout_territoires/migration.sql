-- Rattache chaque mesure d'indicateur à un territoire (Hexagone, Outre-mer ou une des 18 régions).

-- DeleteTable : les mesures existantes sont des données fictives de l'aperçu, au format sans
-- territoire. Elles sont régénérées à l'identique par le script de données fictives.
DELETE FROM "Mesure";

-- AlterTable
ALTER TABLE "Mesure" ADD COLUMN "territoire" TEXT NOT NULL DEFAULT 'hexagone';

-- AlterTable : la colonne est désormais renseignée par chaque insertion (aucune valeur par défaut).
ALTER TABLE "Mesure" ALTER COLUMN "territoire" DROP DEFAULT;

-- DropIndex
DROP INDEX "Mesure_indicateur_periode_key";

-- CreateIndex
CREATE UNIQUE INDEX "Mesure_indicateur_territoire_periode_key" ON "Mesure"("indicateur", "territoire", "periode");
