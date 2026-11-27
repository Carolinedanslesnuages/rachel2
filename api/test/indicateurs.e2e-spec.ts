import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types.js';
import { AppModule } from './../src/app.module.js';
import { configurerApp } from './../src/configurer-app.js';
import { PrismaService } from './../src/prisma/prisma.service.js';

describe('Indicateurs (e2e)', () => {
  let app: INestApplication<App>;
  const findMany = vi.fn();

  beforeEach(async () => {
    const module = await Test.createTestingModule({ imports: [AppModule] })
      .overrideProvider(PrismaService)
      .useValue({ mesure: { findMany }, $disconnect: async () => {} })
      .compile();
    app = module.createNestApplication();
    configurerApp(app);
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it('sert le tableau de bord calculé à partir des mesures', async () => {
    findMany.mockResolvedValue([
      { indicateur: 'demandes-recues', periode: new Date('2026-09-01T00:00:00Z'), valeur: 100 },
      { indicateur: 'demandes-recues', periode: new Date('2026-10-01T00:00:00Z'), valeur: 110 },
    ]);
    const reponse = await request(app.getHttpServer()).get('/api/indicateurs').expect(200);
    expect(reponse.body.chiffres[0]).toMatchObject({ id: 'demandes-recues', valeur: 110, evolution: 10 });
    expect(reponse.body.series[0].periodes).toEqual(['2026-09', '2026-10']);
    expect(findMany).toHaveBeenCalledWith(expect.objectContaining({ orderBy: { periode: 'desc' } }));
  });
});
