import axe from 'axe-core'

/** axe-core, WCAG 2.1 A/AA (base du RGAA 4). Couvre environ un tiers des critères. */
export async function violationsAccessibilite(element: Element): Promise<string[]> {
  const resultat = await axe.run(element, {
    runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'] },
    rules: { 'color-contrast': { enabled: false } }, // non mesurable sous jsdom
  })
  return resultat.violations.map(
    (violation) => `${violation.id} — ${violation.help} (${violation.nodes.length}) : ${violation.helpUrl}`,
  )
}
