const { generateStaticPage } = require('../src/index');

describe('Generación de página estática', () => {
  test('generateStaticPage no lanza errores', () => {
    expect(() => generateStaticPage()).not.toThrow();
  });
});