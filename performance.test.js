/* jshint esversion: 6 */
const { fiboNumber, syraNumber } = require('./index');

describe('Test performance for fiboNumber(nb)', () => {
  const nbs = [10, 20, 30];
  nbs.forEach(nb => {
    test(`nb = ${nb}`, () => {
      const t0 = performance.now();
      const fiboNb = fiboNumber(nb);
      const t1 = performance.now();
      console.log(`fiboNumber(${nb})\t${fiboNb}\t${t1 - t0} milliseconds.`);
    });
  });
});

describe('Test performance for syraNumber(k, nb)', () => {
  const k = 1000;
  const nbs = [100, 200, 300];
  nbs.forEach(nb => {
    test(`nb = ${nb}`, () => {
      const t0 = performance.now();
      const syraNb = syraNumber(k, nb);
      const t1 = performance.now();
      console.log(`syraNumber(${k},${nb})\t${syraNb}\t${t1 - t0} milliseconds.`);
    });
  });
});
