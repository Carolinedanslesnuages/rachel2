-- Données FICTIVES pour l'aperçu et les démonstrations : 12 mois de deux indicateurs,
-- pour l'Hexagone, l'Outre-mer et les 18 régions.
-- Rejouable : n'ajoute rien si des mesures existent déjà. Jamais de données réelles ici.
INSERT INTO "Mesure" ("indicateur", "territoire", "periode", "valeur")
SELECT indicateur, territoire, periode::date, valeur
FROM (
  SELECT 'demandes-recues' AS indicateur, territoire, mois AS periode, 120 + (rang * 7) % 45 AS valeur, rang
  FROM generate_series(date_trunc('month', CURRENT_DATE) - INTERVAL '11 months', date_trunc('month', CURRENT_DATE), INTERVAL '1 month')
       WITH ORDINALITY AS serie(mois, rang)
  CROSS JOIN (VALUES
    ('hexagone'), ('outre-mer'),
    ('auvergne-rhone-alpes'), ('bourgogne-franche-comte'), ('bretagne'), ('centre-val-de-loire'),
    ('corse'), ('grand-est'), ('hauts-de-france'), ('ile-de-france'), ('normandie'),
    ('nouvelle-aquitaine'), ('occitanie'), ('pays-de-la-loire'), ('provence-alpes-cote-d-azur'),
    ('guadeloupe'), ('guyane'), ('la-reunion'), ('martinique'), ('mayotte')
  ) AS territoires(territoire)
  UNION ALL
  SELECT 'demandes-traitees', territoire, mois, 100 + (rang * 11) % 50, rang
  FROM generate_series(date_trunc('month', CURRENT_DATE) - INTERVAL '11 months', date_trunc('month', CURRENT_DATE), INTERVAL '1 month')
       WITH ORDINALITY AS serie(mois, rang)
  CROSS JOIN (VALUES
    ('hexagone'), ('outre-mer'),
    ('auvergne-rhone-alpes'), ('bourgogne-franche-comte'), ('bretagne'), ('centre-val-de-loire'),
    ('corse'), ('grand-est'), ('hauts-de-france'), ('ile-de-france'), ('normandie'),
    ('nouvelle-aquitaine'), ('occitanie'), ('pays-de-la-loire'), ('provence-alpes-cote-d-azur'),
    ('guadeloupe'), ('guyane'), ('la-reunion'), ('martinique'), ('mayotte')
  ) AS territoires(territoire)
) AS donnees
WHERE NOT EXISTS (SELECT 1 FROM "Mesure");
