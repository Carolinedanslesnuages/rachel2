import { calculerTableauDeBord, DOMAINES, type Mesure } from './indicateurs.js';

const mesure = (indicateur: string, periode: string, valeur: number, territoire = 'hexagone'): Mesure => ({
  indicateur,
  territoire,
  periode: new Date(`${periode}-01T00:00:00Z`),
  valeur,
});

describe('Calcul du tableau de bord', () => {
  it('propose quatre domaines : Économie, Énergie, Écosystèmes, Climat et environnement', () => {
    expect(DOMAINES.map((domaine) => domaine.libelle)).toEqual([
      'Économie',
      'Énergie',
      'Écosystèmes',
      'Climat et environnement',
    ]);
  });

  it('ne retient que les mesures du territoire demandé', () => {
    const mesures = [
      mesure('demandes-recues', '2026-10', 120, 'hexagone'),
      mesure('demandes-recues', '2026-10', 45, 'bretagne'),
      mesure('demandes-traitees', '2026-10', 90, 'bretagne'),
    ];
    const { sections } = calculerTableauDeBord('bretagne', mesures);
    const economie = sections.find((section) => section.domaine === 'Économie');
    expect(economie?.chiffres.find((chiffre) => chiffre.id === 'demandes-recues')?.valeur).toBe(45);
    expect(economie?.chiffres.find((chiffre) => chiffre.id === 'demandes-traitees')?.valeur).toBe(90);
  });

  it('expose une section par domaine, avec ses chiffres et ses séries', () => {
    const mesures = [
      mesure('demandes-recues', '2026-09', 100),
      mesure('demandes-recues', '2026-10', 120),
      mesure('demandes-traitees', '2026-10', 90),
    ];
    const { sections } = calculerTableauDeBord('hexagone', mesures);
    expect(sections).toHaveLength(4);
    const economie = sections.find((section) => section.domaine === 'Économie');
    expect(economie?.chiffres).toEqual([
      { id: 'demandes-recues', libelle: 'Demandes reçues', unite: 'demandes', domaine: 'Économie', valeur: 120, periode: '2026-10', evolution: 20 },
      { id: 'demandes-traitees', libelle: 'Demandes traitées', unite: 'demandes', domaine: 'Économie', valeur: 90, periode: '2026-10', evolution: null },
    ]);
    expect(economie?.series).toHaveLength(1);
    const autresDomaines = sections.filter((section) => section.domaine !== 'Économie');
    for (const section of autresDomaines) {
      expect(section.chiffres.every((chiffre) => chiffre.valeur === null && chiffre.evolution === null)).toBe(true);
      expect(section.series).toEqual([]);
    }
  });

  it('affiche « donnée non disponible » côté serveur : valeur nulle, sans inventer de série', () => {
    const mesures: Mesure[] = [];
    const { sections } = calculerTableauDeBord('guadeloupe', mesures);
    const economie = sections.find((section) => section.domaine === 'Économie');
    for (const chiffre of economie?.chiffres ?? []) {
      expect(chiffre.valeur).toBeNull();
      expect(chiffre.periode).toBeNull();
    }
    expect(economie?.series).toEqual([]);
  });
});
