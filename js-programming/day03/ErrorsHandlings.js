console.log("Test started");

try {
  console.log(result);
} catch (error) {
  console.log(`An error occurred ==> ${error}`);
} finally {
  console.log("Finally block");
}

console.log("Test completed");

console.log("--------------");

throw new Error("An error occured");
