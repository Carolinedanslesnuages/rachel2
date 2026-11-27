import type { INestApplication } from '@nestjs/common';

/** Réglages communs à main.ts et aux tests e2e. */
export function configurerApp(app: INestApplication): void {
  app.setGlobalPrefix('api', { exclude: ['__version__', 'api/__version__'] });
}
