for (let index = 0; index < 5; index++) {
  console.log("Hello there");
}
console.log("------------------------------------------------");

for (let index = 1; index <= 10; index++) {
  console.log(index);
  if (index == 5) {
    break; //terminates the current loop
  }
}

console.log("------------------------------------------------");

for (let index = 1; index <= 10; index++) {
  if (index == 3 || index == 7 || index == 9) {
    continue; //skip the iteration
  }
  console.log(index);
}
