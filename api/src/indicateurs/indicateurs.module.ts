import { Module } from '@nestjs/common';
import { IndicateursController } from './indicateurs.controller.js';
import { IndicateursService } from './indicateurs.service.js';

@Module({
  controllers: [IndicateursController],
  providers: [IndicateursService],
})
export class IndicateursModule {}
