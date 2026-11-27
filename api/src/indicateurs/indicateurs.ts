/**
 * Calcul des indicateurs du tableau de bord : fonctions pures, testées sans base.
 * Ajouter un indicateur = l'ajouter à INDICATEURS (et ses mesures en base).
 */
export interface DefinitionIndicateur {
  id: string;
  libelle: string;
  unite: string;
}

export const INDICATEURS: DefinitionIndicateur[] = [
  { id: 'demandes-recues', libelle: 'Demandes reçues', unite: 'demandes' },
  { id: 'demandes-traitees', libelle: 'Demandes traitées', unite: 'demandes' },
];

export interface Mesure {
  indicateur: string;
  periode: Date;
  valeur: number;
}

export interface Chiffre extends DefinitionIndicateur {
  /** Valeur de la dernière période mesurée. */
  valeur: number | null;
  /** Évolution par rapport à la période précédente, en % arrondi ; null sans période précédente. */
  evolution: number | null;
  periode: string | null;
}

export interface Serie {
  titre: string;
  unite: string;
  /** Périodes (AAAA-MM), dans l'ordre. */
  periodes: string[];
  courbes: { nom: string; valeurs: (number | null)[] }[];
}

export interface TableauDeBord {
  chiffres: Chiffre[];
  series: Serie[];
}

const mois = (date: Date) => date.toISOString().slice(0, 7);

export function calculerTableauDeBord(mesures: Mesure[], indicateurs = INDICATEURS): TableauDeBord {
  const periodes = [...new Set(mesures.map((mesure) => mois(mesure.periode)))].sort();
  const valeurDe = (indicateur: string, periode: string) =>
    mesures.find((mesure) => mesure.indicateur === indicateur && mois(mesure.periode) === periode)?.valeur ?? null;

  const chiffres = indicateurs.map((definition) => {
    const propres = periodes.filter((periode) => valeurDe(definition.id, periode) !== null);
    const derniere = propres.at(-1) ?? null;
    const precedente = propres.at(-2) ?? null;
    const valeur = derniere ? valeurDe(definition.id, derniere) : null;
    const avant = precedente ? valeurDe(definition.id, precedente) : null;
    return {
      ...definition,
      valeur,
      periode: derniere,
      evolution: valeur !== null && avant ? Math.round(((valeur - avant) / avant) * 100) : null,
    };
  });

  const series: Serie[] = periodes.length
    ? [
        {
          titre: 'Évolution mensuelle',
          unite: indicateurs[0]?.unite ?? '',
          periodes,
          courbes: indicateurs.map((definition) => ({
            nom: definition.libelle,
            valeurs: periodes.map((periode) => valeurDe(definition.id, periode)),
          })),
        },
      ]
    : [];

  return { chiffres, series };
}
