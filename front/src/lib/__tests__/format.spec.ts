import { describe, it, expect } from 'vitest'
import { evolution, nombre, periode } from '../format'

describe('Mise en forme', () => {
  it('nombres, périodes et évolutions en français, sans dépendre de la couleur', () => {
    expect(nombre(1250).replace(/\s/g, ' ')).toBe('1 250')
    expect(nombre(null)).toBe('—')
    expect(periode('2026-10')).toBe('octobre 2026')
    expect(evolution(12)).toBe('+12 % par rapport au mois précédent')
    expect(evolution(-5)).toBe('−5 % par rapport au mois précédent')
    expect(evolution(0)).toBe('Stable par rapport au mois précédent')
    expect(evolution(null)).toBe('Pas de comparaison possible')
  })
})
