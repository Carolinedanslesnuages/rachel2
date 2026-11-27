/**
 * Calcul des indicateurs du tableau de bord : fonctions pures, testées sans base.
 * Ajouter un indicateur = l'ajouter à INDICATEURS (et ses mesures en base).
 * Un indicateur appartient à un seul des quatre domaines du tableau de bord.
 */
export interface DefinitionIndicateur {
  id: string;
  libelle: string;
  unite: string;
  domaine: string;
}

export interface Domaine {
  /** Nom du domaine, affiché en tant que titre de section. */
  libelle: string;
  /** Description courte de ce que le domaine observe. */
  description: string;
}

export const DOMAINES: Domaine[] = [
  {
    libelle: 'Économie',
    description: 'Activité économique, emploi et commandes du territoire.',
  },
  {
    libelle: 'Énergie',
    description: 'Production et consommation d’énergie du territoire.',
  },
  {
    libelle: 'Écosystèmes',
    description: 'État des milieux naturels et de la biodiversité.',
  },
  {
    libelle: 'Climat et environnement',
    description: 'Émissions, qualité de l’air et températures du territoire.',
  },
];

export const INDICATEURS: DefinitionIndicateur[] = [
  { id: 'demandes-recues', libelle: 'Demandes reçues', unite: 'demandes', domaine: 'Économie' },
  { id: 'demandes-traitees', libelle: 'Demandes traitées', unite: 'demandes', domaine: 'Économie' },
];

export interface Mesure {
  indicateur: string;
  territoire: string;
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

export interface Section {
  domaine: string;
  description: string;
  chiffres: Chiffre[];
  series: Serie[];
}

export interface TableauDeBord {
  sections: Section[];
}

const mois = (date: Date) => date.toISOString().slice(0, 7);

/** Les indicateurs d'un domaine, dans l'ordre de déclaration. */
function indicateursDuDomaine(domaine: Domaine): DefinitionIndicateur[] {
  return INDICATEURS.filter((indicateur) => indicateur.domaine === domaine.libelle);
}

function calculerChiffres(mesures: Mesure[], indicateurs: DefinitionIndicateur[]): Chiffre[] {
  const periodes = [...new Set(mesures.map((mesure) => mois(mesure.periode)))].sort();
  const valeurDe = (indicateur: string, periode: string) =>
    mesures.find((mesure) => mesure.indicateur === indicateur && mois(mesure.periode) === periode)?.valeur ?? null;

  return indicateurs.map((definition) => {
    const periodesConnues = periodes.filter((periode) => valeurDe(definition.id, periode) !== null);
    const derniere = periodesConnues.at(-1) ?? null;
    const precedente = periodesConnues.at(-2) ?? null;
    const valeur = derniere ? valeurDe(definition.id, derniere) : null;
    const avant = precedente ? valeurDe(definition.id, precedente) : null;
    return {
      ...definition,
      valeur,
      periode: derniere,
      evolution: valeur !== null && avant !== null ? Math.round(((valeur - avant) / avant) * 100) : null,
    };
  });
}

function calculerSeries(mesures: Mesure[], indicateurs: DefinitionIndicateur[]): Serie[] {
  const periodes = [...new Set(mesures.map((mesure) => mois(mesure.periode)))].sort();
  if (periodes.length === 0 || indicateurs.length === 0) return [];
  const valeurDe = (indicateur: string, periode: string) =>
    mesures.find((mesure) => mesure.indicateur === indicateur && mois(mesure.periode) === periode)?.valeur ?? null;
  return [
    {
      titre: 'Évolution mensuelle',
      unite: indicateurs[0]?.unite ?? '',
      periodes,
      courbes: indicateurs.map((definition) => ({
        nom: definition.libelle,
        valeurs: periodes.map((periode) => valeurDe(definition.id, periode)),
      })),
    },
  ];
}

export function calculerTableauDeBord(territoire: string, mesures: Mesure[], domaines = DOMAINES): TableauDeBord {
  const mesuresDuTerritoire = mesures.filter((mesure) => mesure.territoire === territoire);
  const sections = domaines.map((domaine) => {
    const indicateurs = indicateursDuDomaine(domaine);
    return {
      domaine: domaine.libelle,
      description: domaine.description,
      chiffres: calculerChiffres(mesuresDuTerritoire, indicateurs),
      series: calculerSeries(mesuresDuTerritoire, indicateurs),
    };
  });
  return { sections };
}
