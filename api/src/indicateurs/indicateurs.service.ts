import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { calculerTableauDeBord, INDICATEURS, type TableauDeBord } from './indicateurs.js';

@Injectable()
export class IndicateursService {
  constructor(private readonly prisma: PrismaService) {}

  /** Les 12 dernières périodes mesurées des indicateurs connus. */
  async tableauDeBord(): Promise<TableauDeBord> {
    const mesures = await this.prisma.mesure.findMany({
      where: { indicateur: { in: INDICATEURS.map((indicateur) => indicateur.id) } },
      orderBy: { periode: 'desc' },
      take: 12 * INDICATEURS.length,
    });
    return calculerTableauDeBord(mesures);
  }
}
