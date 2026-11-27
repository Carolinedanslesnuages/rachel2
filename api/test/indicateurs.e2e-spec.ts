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
      { indicateur: 'demandes-recues', territoire: 'hexagone', periode: new Date('2026-09-01T00:00:00Z'), valeur: 100 },
      { indicateur: 'demandes-recues', territoire: 'hexagone', periode: new Date('2026-10-01T00:00:00Z'), valeur: 110 },
    ]);
    const reponse = await request(app.getHttpServer()).get('/api/indicateurs').expect(200);
    expect(reponse.body.sections[0].domaine).toBe('Économie');
    expect(reponse.body.sections[0].chiffres[0]).toMatchObject({ id: 'demandes-recues', valeur: 110, evolution: 10 });
    expect(reponse.body.sections).toHaveLength(4);
    expect(findMany).toHaveBeenCalledWith(
      expect.objectContaining({ where: expect.objectContaining({ territoire: 'hexagone' }) }),
    );
  });

  it('ne renvoie que les mesures du territoire demandé', async () => {
    findMany.mockResolvedValue([]);
    await request(app.getHttpServer()).get('/api/indicateurs?territoire=bretagne').expect(200);
    expect(findMany).toHaveBeenCalledWith(
      expect.objectContaining({ where: expect.objectContaining({ territoire: 'bretagne' }) }),
    );
  });

  it('sert le territoire par défaut (Hexagone) quand le territoire demandé est inconnu', async () => {
    findMany.mockResolvedValue([]);
    await request(app.getHttpServer()).get('/api/indicateurs?territoire=inexistant').expect(200);
    expect(findMany).toHaveBeenCalledWith(
      expect.objectContaining({ where: expect.objectContaining({ territoire: 'hexagone' }) }),
    );
  });
});
