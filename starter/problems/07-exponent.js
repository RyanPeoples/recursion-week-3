/***********************************************************************
Write a recursive function called `exponent` that takes two integers,
`num` and `power`, and returns `num` raised to the `power`th power. Your
function should work when `num` or `power` are positive OR negative.

Exponents are used to represent a number being multiplied by itself a
given number of times:

5^5 = 5 x 5 x 5 x 5 x 5 = 3125

Negative exponents represent the same action, but in the denominator instead
of the numerator:

4^-3 = (1/4) * (1/4) * (1/4) = 1/64.

Examples:

exponent(3, 2); // 9
exponent(2, -2); // 1/4 (or 0.25)
exponent(5, 5); // 3125
***********************************************************************/

const exponent = (n, b) => {

  if (b === 0) {
    return 1;
  } else if (b === 1) {
    return n;
  }

  let counter = b;
  let negCounter = b;

  if (b < 1) {
    negCounter++;
    return 1 / n * exponent(n, negCounter)
  }

  if (b > 1) {
    counter--;
    return n * exponent(n, counter)
  }

  if (counter === 0 || negCounter === 0) return n;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = exponent;
} catch (e) {
  module.exports = null;
}
