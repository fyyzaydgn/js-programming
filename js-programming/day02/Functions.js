function greetings() {
  console.log("Hello everyone!");
}

greetings();

console.log("--------------------------------");

/**
 * This function is used to display a personalized greeting message.
 * If no name is provided, it defaults to "Adam".
 *
 * @param {string} [personName="Adam"] - The name of the person to be greeted.
 *
 * @returns {void} This function does not return any value.
 * It only logs a greeting message to the console.
 */
function displayName(personName = "Adam") {
  console.log(`Hello, the name of the person is ${personName}!`);
}
displayName();
displayName("Feyyaz");

console.log("--------------------------------");

/**
 * This function calculates the sum of three numbers.
 * If the third parameter is not provided, it defaults to 0.
 *
 * @param {number} num1 - The first number to be added.
 * @param {number} num2 - The second number to be added.
 * @param {number} [num3=0] - The third number to be added. Defaults to 0 if not provided.
 *
 * @returns {number} The sum of the three numbers.
 */
function addNumbers(num1, num2, num3 = 0) {
  return num1 + num2 + num3;
}

let result = addNumbers(10, 20);
console.log(result);

let x = addNumbers(10, 20, 30);
console.log(x);
