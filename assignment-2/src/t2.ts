function squareRoot(num: number | null | undefined): number | string {
  if (num === undefined || num === null) {
    return "Input is undefined or null.";
  }
  if (isNaN(num)) {
    return "Invalid input. Please enter a valid number.";
  }
  if (num < 0) {
    return "Cannot calculate square root of a negative number.";
  }
  const sqrt = Math.sqrt(num);
  return sqrt;
}

const userInput = prompt("Enter a number:");
const numberInput: number | undefined = userInput
  ? parseFloat(userInput)
  : undefined;
const result = squareRoot(numberInput);

const resultDiv = document.getElementById("result");

if (typeof result === "number") {
  resultDiv!.innerText = `The square root of ${numberInput} is ${result}`;
} else {
  resultDiv!.innerText = result;
}
