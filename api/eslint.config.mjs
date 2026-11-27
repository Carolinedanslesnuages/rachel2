// ESLint limité aux noms explicites : le reste du lint est fait par oxlint (.oxlintrc.json).
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist/**', 'src/generated/**', 'coverage/**'] },
  {
    files: ['src/**/*.ts', 'test/**/*.ts', 'prisma/**/*.ts'],
    languageOptions: { parser: tseslint.parser },
    rules: {
      // Des noms qui ont du sens : pas de « el », « x », « s »… (sauf noms imposés par les bibliothèques).
      'id-length': ['error', { min: 3, properties: 'never', exceptions: ['vi', 'id', 'ok', 'fs', 'db', 'ui', 'to', '_'] }],
    },
  },
);
