(function () {
  // Implement the lengthOrSquare function
  function lengthOrSquare(value: string | number): number {
    if (typeof value === "string") {
      return value.length;
    } else {
      return value * value;
    }
  }

  // Handle form submission
  const form = document.getElementById("inputForm") as HTMLFormElement;
  const valueInput = document.getElementById("valueInput") as HTMLInputElement;
  const resultDiv = document.getElementById("result") as HTMLDivElement;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const userInput = valueInput.value.trim();
    let parsedValue: string | number;

    if (userInput !== "") {
      const numValue = Number(userInput);
      if (!isNaN(numValue)) {
        parsedValue = numValue;
      } else {
        parsedValue = userInput;
      }
    } else {
      resultDiv.innerText = "Please enter a value.";
      return;
    }

    const result = lengthOrSquare(parsedValue);

    if (typeof parsedValue === "string") {
      resultDiv.innerText = `The length of the string "${parsedValue}" is ${result}.`;
    } else {
      resultDiv.innerText = `The square of the number ${parsedValue} is ${result}.`;
    }
  });
})();
