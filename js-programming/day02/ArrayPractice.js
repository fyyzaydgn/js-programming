let elements = ["Java", 1, 2.5, true, false, "Python"];
console.log(elements);

console.log("--------------------------------");

let students = ["Alice", "Bob", "Chris"];

console.log(students);

for (let index = 0; index < students.length; index++) {
  console.log(students[index]);
}

console.log("--------------------------------");

for (let student of students) {
  console.log(student);
}

console.log("--------------------------------");

let employees = ["John", "Tom", "Dennis", "Yang", "Vlad"];
console.log(employees.length);

employees[0] = "Ali";

console.log(employees);

console.log("--------------------------------");

employees.push("Zulu"); //Add element to the end of the array
console.log(employees);

employees.unshift("Aynur"); //Add element to the beginning of the array
console.log(employees);

console.log("--------------------------------");

employees.shift(); // Remove the first element from the array

console.log(employees);

employees.pop(); // Remove the last element from the array
console.log(employees);
