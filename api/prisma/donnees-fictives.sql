-- Données FICTIVES pour l'aperçu et les démonstrations : 12 mois de deux indicateurs.
-- Rejouable : n'ajoute rien si des mesures existent déjà. Jamais de données réelles ici.
INSERT INTO "Mesure" ("indicateur", "periode", "valeur")
SELECT indicateur, periode::date, valeur
FROM (
  SELECT 'demandes-recues' AS indicateur, mois AS periode, 120 + (rang * 7) % 45 AS valeur, rang
  FROM generate_series(date_trunc('month', CURRENT_DATE) - INTERVAL '11 months', date_trunc('month', CURRENT_DATE), INTERVAL '1 month')
       WITH ORDINALITY AS serie(mois, rang)
  UNION ALL
  SELECT 'demandes-traitees', mois, 100 + (rang * 11) % 50, rang
  FROM generate_series(date_trunc('month', CURRENT_DATE) - INTERVAL '11 months', date_trunc('month', CURRENT_DATE), INTERVAL '1 month')
       WITH ORDINALITY AS serie(mois, rang)
) AS donnees
WHERE NOT EXISTS (SELECT 1 FROM "Mesure");
