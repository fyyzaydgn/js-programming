let school = "Utrecht University";

console.log(school);
console.log(typeof school);

console.log(school.length);

console.log(school.charAt(0));
console.log(school[0]);

console.log(school[school.length - 1]);

console.log("--------------------------------");

for (let index = 0; index < school.length; index++) {
  console.log(school[index]);
}

console.log("--------------------------------");

school = school.toLowerCase(); // create a new string (object)

console.log(school);

school = school.toUpperCase(); // create a new string (object)

console.log(school);

console.log("--------------------------------");

let expectedResult = "JavaScript";

let actualResult = "JAVASCRIPT";

console.log(expectedResult === actualResult);
console.log(expectedResult.toLowerCase === actualResult.toLowerCase);

console.log("--------------------------------");

let str = "python python";

// str = str.replace("python", "javascript")
str = str.replace(/python/g, "javascript"); // g:global flag
console.log(str);

console.log("--------------------------------");

let email = "feyyazaydogan@outlook.com";
let domain = email.substring(email.indexOf("@") + 1, email.lastIndexOf("."));
console.log(domain);

console.log("--------------------------------");

let employeeName = "John";
let employeeSalary = "100000";

console.log(`My name is ${employeeName}, and my salary is ${employeeSalary} US Dollars`);
