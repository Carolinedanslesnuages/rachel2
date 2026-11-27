import { calculerTableauDeBord, type Mesure } from './indicateurs.js';

const mesure = (indicateur: string, periode: string, valeur: number): Mesure => ({ indicateur, periode: new Date(`${periode}-01T00:00:00Z`), valeur });

describe('Calcul du tableau de bord', () => {
  const mesures = [
    mesure('demandes-recues', '2026-09', 100),
    mesure('demandes-recues', '2026-10', 120),
    mesure('demandes-traitees', '2026-10', 90),
  ];

  it('donne la dernière valeur de chaque indicateur et son évolution sur la période précédente', () => {
    const { chiffres } = calculerTableauDeBord(mesures);
    expect(chiffres).toEqual([
      { id: 'demandes-recues', libelle: 'Demandes reçues', unite: 'demandes', valeur: 120, periode: '2026-10', evolution: 20 },
      { id: 'demandes-traitees', libelle: 'Demandes traitées', unite: 'demandes', valeur: 90, periode: '2026-10', evolution: null },
    ]);
  });

  it('prépare une série par période, une courbe par indicateur, sans inventer de valeur manquante', () => {
    const { series } = calculerTableauDeBord(mesures);
    expect(series).toEqual([
      {
        titre: 'Évolution mensuelle',
        unite: 'demandes',
        periodes: ['2026-09', '2026-10'],
        courbes: [
          { nom: 'Demandes reçues', valeurs: [100, 120] },
          { nom: 'Demandes traitées', valeurs: [null, 90] },
        ],
      },
    ]);
  });

  it('sans mesure : chiffres vides et aucune série', () => {
    const tableau = calculerTableauDeBord([]);
    expect(tableau.series).toEqual([]);
    expect(tableau.chiffres.every((chiffre) => chiffre.valeur === null && chiffre.evolution === null)).toBe(true);
  });
});
