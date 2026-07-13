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

// factorial

function factorial(n) {
  if (n === 1) return n;

  return n * factorial(n - 1);
}

console.log("factorial", factorial(5));
console.log("factorial", factorial(2));
console.log("factorial", factorial(1));
console.log("factorial", factorial(3));

// Promise

const promise = new Promise((reslove, rejected) => {
  let success = false;

  if (success) {
    reslove("operation successful");
  } else {
    rejected("operation failed");
  }
});

promise
  .then((res) => {
    console.log(`done ${res}`);
  })
  .catch((error) => console.log(`fail ${error}`));

// 3 common ways to remove duplicate elements from an array in JavaScript

// 1.
const arr = [1, 2, 2, 3, 4, 4, 5];

const unique = [...new Set(arr)];

console.log(`remove duplicate`, unique);

// 2.

const arr2 = [1, 2, 2, 3, 4, 4, 5];

const unique2 = arr2.filter((item, index) => {
  return arr2.indexOf(item) === index;
});

console.log(`remove duplicate2`, unique2);

// 3.

const arr3 = [1, 2, 2, 3, 4, 4, 5];

const unique3 = [];

for (let i = 0; i < arr3.length; i++) {
  if (!unique3.includes(arr3[i])) {
    unique3.push(arr3[i]);
  }
}

console.log(`remove duplicate3`, unique3);

// Find duplicate elements from an array in JavaScript

const findArr = [1, 2, 2, 3, 4, 4, 5];

const fineArr2 = findArr.filter((item, index) => {
  return findArr.indexOf(item) !== index;
});

console.log(`fineArr2`, fineArr2);

// Count Vowels
function countVowels(str) {
  let count = 0;

  for (let char of str.toLowerCase()) {
    if ("aeiou".includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("Mahendran"));

// Reverse a String
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("Mahendran"));

// Largest Number for loop
const arr = [10, 55, 22, 90, 15];

let largest = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > largest) {
    largest = arr[i];
  }
}

console.log(largest); // 90

// Lowest Number for loop
const arr = [10, 55, 22, 90, 15, 5];

let min = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }
}

console.log(min);

