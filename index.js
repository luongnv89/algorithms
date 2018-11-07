/* jshint esversion: 6 */

/**
 * The Fibonacci series :
    The recursion is the ability for a function to call itself
    F0 =F1=1
    Fn+2 = Fn+1+Fn ∀n∈N
 * @param {Number} nb
 */
const fiboNumber = (nb) => {
  if (nb < 0) return 0;
  if (nb !== parseInt(nb, 10)) return 0;
  if (nb < 2) return 1;
  return fiboNumber(nb - 1) + fiboNumber(nb - 2);
};
/**
 * The series used for the Collatz (Syracuse, 3n+1, Ulam) conjecture :
    Problem :
    u0=k k∈N
    u_(n+1) = 􏰀u_n/2   if u_n is an even number
    u_(n+1) = 3 * u_n + 1   if u_n is an odd number
 * @param {Number} nb
 * @param {Number} k
 */
const syraNumber = (k, nb) => {

  if (k < 0) return 0;
  if (k !== parseInt(k, 10)) return 0;
  if (nb < 0) return 0;
  if (nb !== parseInt(nb, 10)) return 0;
  if (nb === 0) return k;
  const prevNumber = syraNumber(k, nb - 1);
  if (prevNumber % 2 === 1 ) return 3 * prevNumber + 1;
  return prevNumber / 2;
};

module.exports = {
  fiboNumber,
  syraNumber
};
