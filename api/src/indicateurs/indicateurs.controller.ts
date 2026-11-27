import { Controller, Get } from '@nestjs/common';
import { IndicateursService } from './indicateurs.service.js';

@Controller('indicateurs')
export class IndicateursController {
  constructor(private readonly indicateurs: IndicateursService) {}

  @Get()
  lire() {
    return this.indicateurs.tableauDeBord();
  }
}
