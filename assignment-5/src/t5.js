(function () {
    // Implement the lengthOrSquare function
    function lengthOrSquare(value) {
        if (typeof value === "string") {
            return value.length;
        }
        else {
            return value * value;
        }
    }
    // Handle form submission
    var form = document.getElementById("inputForm");
    var valueInput = document.getElementById("valueInput");
    var resultDiv = document.getElementById("result");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var userInput = valueInput.value.trim();
        var parsedValue;
        if (userInput !== "") {
            var numValue = Number(userInput);
            if (!isNaN(numValue)) {
                parsedValue = numValue;
            }
            else {
                parsedValue = userInput;
            }
        }
        else {
            resultDiv.innerText = "Please enter a value.";
            return;
        }
        var result = lengthOrSquare(parsedValue);
        if (typeof parsedValue === "string") {
            resultDiv.innerText = "The length of the string \"".concat(parsedValue, "\" is ").concat(result, ".");
        }
        else {
            resultDiv.innerText = "The square of the number ".concat(parsedValue, " is ").concat(result, ".");
        }
    });
})();
