import { Controller, Get, Query } from '@nestjs/common';
import { IndicateursService } from './indicateurs.service.js';

@Controller('indicateurs')
export class IndicateursController {
  constructor(private readonly indicateurs: IndicateursService) {}

  @Get()
  lire(@Query('territoire') territoire?: string) {
    return this.indicateurs.tableauDeBord(territoire);
  }
}
