/** Mise en forme française des nombres, périodes et évolutions. */
export const nombre = (valeur: number | null) => (valeur === null ? '—' : valeur.toLocaleString('fr-FR'))

/** « 2026-10 » → « octobre 2026 ». */
export function periode(mois: string | null): string {
  if (!mois) return '—'
  const [annee, numero] = mois.split('-').map(Number)
  return new Date(Date.UTC(annee!, numero! - 1, 1)).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric', timeZone: 'UTC' })
}

/** « +12 % par rapport au mois précédent » (jamais par la couleur seule). */
export function evolution(pourcentage: number | null): string {
  if (pourcentage === null) return 'Pas de comparaison possible'
  if (pourcentage === 0) return 'Stable par rapport au mois précédent'
  return `${pourcentage > 0 ? '+' : '−'}${Math.abs(pourcentage)} % par rapport au mois précédent`
}
