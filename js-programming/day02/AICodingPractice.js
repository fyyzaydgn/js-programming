// Create an array of strings and add 10 employee names to it.
let employees = [
  "John",
  "Tom",
  "Dennis",
  "Yang",
  "Vlad",
  "Sarah",
  "Emily",
  "Michael",
  "David",
  "Lisa",
];

// Print the array to the console
console.log(employees);

// set the first employee name to "Feyyaz" and last employee name to "Ela".
employees[0] = "Feyyaz";
employees[employees.length - 1] = "Ela";

// Print the modified array to the console
console.log(employees);

console.log("-----------");

// display all the elements of the array in reversed order.
for (let index = employees.length - 1; index >= 0; index--) {
  console.log(employees[index]);
}

console.log("-----------");

let numbers = [100, 200, 300, 400, 5, 4, 6, 7, 8, 9, 10, -100, 20000];

// write a program that can display the maximum and minimum numbers from the numbers array. Do not use any build-in sort functions.
let maxNumber = numbers[0];
let minNumber = numbers[0];

for (let index = 1; index < numbers.length; index++) {
  if (numbers[index] > maxNumber) {
    maxNumber = numbers[index];
  }

  if (numbers[index] < minNumber) {
    minNumber = numbers[index];
  }
}

console.log("Maximum Number:", maxNumber);
console.log("Minimum Number:", minNumber);

console.log("-----------");

// Write a program that can sort the numbers array in ascending order. Do not use any build-in sort functions.
for (let i = 0; i < numbers.length - 1; i++) {
  for (let j = 0; j < numbers.length - i - 1; j++) {
    if (numbers[j] > numbers[j + 1]) {
      let temp = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = temp;
    }
  }
}

console.log("Sorted Numbers:", numbers);

console.log("-----------");

let nums = [1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7];

// Write a program that can remove duplicates from the nums array
let uniqueNums = [];

for (let i = 0; i < nums.length; i++) {
  if (!uniqueNums.includes(nums[i])) {
    uniqueNums.push(nums[i]);
  }
}

console.log(uniqueNums);

console.log("-----------");
