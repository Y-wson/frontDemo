/**
 * 0 1 1 2 3 5 8 13....
 */
/**
 *
 * 时间复杂度 o(1)<o(logn)<o(n)<o(nlogn)<o(n^2)<o(n^3)<o(2^n)
 */
const fib = (n) => {
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
};

const fib1 = (n) => {
  if (n <= 1) {
    return n;
  }
  let first = 0;
  let second = 1;
  for (let i = 0; i < n - 1; i++) {
    let sum = first + second;
    first = second;
    second = sum;
  }
  return second;
};
console.time("a");
console.log(fib1(4));
console.timeEnd("a");
