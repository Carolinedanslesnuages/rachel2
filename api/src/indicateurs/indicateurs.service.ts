import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { calculerTableauDeBord, INDICATEURS, type TableauDeBord } from './indicateurs.js';
import { TERRITOIRE_PAR_DEFAUT, territoireConnu } from '../territoires/territoires.js';

/** Territoire demandé ; inconnu → repli sur le territoire par défaut (Hexagone). */
export function territoireDemandeOuDefaut(territoire: string | undefined): string {
  if (territoire && territoireConnu(territoire)) return territoire;
  return TERRITOIRE_PAR_DEFAUT.id;
}

@Injectable()
export class IndicateursService {
  constructor(private readonly prisma: PrismaService) {}

  /** Les 12 dernières périodes mesurées des indicateurs connus, pour le territoire demandé. */
  async tableauDeBord(territoire?: string): Promise<TableauDeBord> {
    const territoireFiltre = territoireDemandeOuDefaut(territoire);
    const mesures = await this.prisma.mesure.findMany({
      where: {
        indicateur: { in: INDICATEURS.map((indicateur) => indicateur.id) },
        territoire: territoireFiltre,
      },
      orderBy: { periode: 'desc' },
      take: 12 * INDICATEURS.length,
    });
    return calculerTableauDeBord(territoireFiltre, mesures);
  }}
