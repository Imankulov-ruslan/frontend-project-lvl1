export default function isEven(number) {
  return number % 2 === 0;
}

export function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

export function findGcd(num1, num2) {
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) num1 %= num2;
    else num2 %= num1;
  }
  return num1 + num2;
}

export function createProgression(start, step, length) {
  const res = [];
  for (let i = 0; i <= length; i += 1) {
    const result = start + (i * step);
    res.push(result);
  }
  return res;
}

export function calc(num1, operator, num2) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
  }
}
