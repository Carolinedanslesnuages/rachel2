/**
 * Territoires du tableau de bord : l'Hexagone, l'Outre-mer et les 18 régions
 * administratives (métropole et Outre-mer).
 */
export const TERRITOIRE_HEXAGONE = 'hexagone';
export const TERRITOIRE_OUTRE_MER = 'outre-mer';

export interface Territoire {
  /** Identifiant stable, utilisé dans les mesures (minuscules, sans accents ni espaces). */
  id: string;
  /** Nom affiché dans l'interface, en toutes lettres. */
  libelle: string;
}

export const TERRITOIRES: Territoire[] = [
  { id: TERRITOIRE_HEXAGONE, libelle: 'Hexagone' },
  { id: TERRITOIRE_OUTRE_MER, libelle: 'Outre-mer' },
  { id: 'auvergne-rhone-alpes', libelle: 'Auvergne-Rhône-Alpes' },
  { id: 'bourgogne-franche-comte', libelle: 'Bourgogne-Franche-Comté' },
  { id: 'bretagne', libelle: 'Bretagne' },
  { id: 'centre-val-de-loire', libelle: 'Centre-Val de Loire' },
  { id: 'corse', libelle: 'Corse' },
  { id: 'grand-est', libelle: 'Grand Est' },
  { id: 'hauts-de-france', libelle: 'Hauts-de-France' },
  { id: 'ile-de-france', libelle: 'Île-de-France' },
  { id: 'normandie', libelle: 'Normandie' },
  { id: 'nouvelle-aquitaine', libelle: 'Nouvelle-Aquitaine' },
  { id: 'occitanie', libelle: 'Occitanie' },
  { id: 'pays-de-la-loire', libelle: 'Pays de la Loire' },
  { id: 'provence-alpes-cote-d-azur', libelle: 'Provence-Alpes-Côte d’Azur' },
  { id: 'guadeloupe', libelle: 'Guadeloupe' },
  { id: 'guyane', libelle: 'Guyane' },
  { id: 'la-reunion', libelle: 'La Réunion' },
  { id: 'martinique', libelle: 'Martinique' },
  { id: 'mayotte', libelle: 'Mayotte' },
];

/** Le territoire par défaut quand aucun n'est encore choisi : l'Hexagone. */
export const TERRITOIRE_PAR_DEFAUT = TERRITOIRES[0];

export function territoireConnu(id: string): boolean {
  return TERRITOIRES.some((territoire) => territoire.id === id);
}

export function trouverTerritoire(id: string): Territoire | undefined {
  return TERRITOIRES.find((territoire) => territoire.id === id);
}
