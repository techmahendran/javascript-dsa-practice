// Merge Sort

function merge(left, right) {
  let result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return [...result, ...left, ...right];
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);

  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

console.log("Merge Sort", mergeSort([7, 6, 5, 3, 4, 2, 1, 8]));

// Quick Sort

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];

  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log("Quick Sort", quickSort([2, 1, 3, 5, 4]));

// Bubble Sort

function bubbleSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

console.log("Bubble Sort", bubbleSort([3, 2, 1]));

// isPrime

function isPrime(n) {
  if (n <= 2) {
    return `${n} is not prime`;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return `${n} is not prime number`;
    }
  }
  return `${n} is prime number`;
}

console.log("isPrime", isPrime(5));
console.log("isPrime", isPrime(2));
console.log("isPrime", isPrime(29));
console.log("isPrime", isPrime(11));

function factorial(n) {
  if (n === 1) return n;

  return n * factorial(n - 1);
}

console.log("factorial", factorial(5));
console.log("factorial", factorial(2));
console.log("factorial", factorial(1));
console.log("factorial", factorial(3));
