import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types.js';
import { AppModule } from './../src/app.module.js';
import { configurerApp } from './../src/configurer-app.js';

describe('Application (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    configurerApp(app);
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it('répond sous le préfixe /api', () => {
    return request(app.getHttpServer()).get('/api').expect(200);
  });

  it.each(['/__version__', '/api/__version__'])(
    'sert la version sur %s, en repli « dev » hors image',
    async (chemin) => {
      const reponse = await request(app.getHttpServer()).get(chemin).expect(200);
      expect(reponse.headers['content-type']).toMatch(/application\/json/);
      expect(reponse.body).toEqual({
        source: '',
        version: 'dev',
        commit: '',
        build: '',
        code_date: '',
        changes: [],
        history: [],
      });
    },
  );
});
