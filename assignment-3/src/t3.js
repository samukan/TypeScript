document
    .getElementById("bookForm")
    .addEventListener("submit", function (event) {
    event.preventDefault();
    var titleInput = document.getElementById("title")
        .value;
    var authorInput = document.getElementById("author")
        .value;
    var yearInput = document.getElementById("year")
        .value;
    var publicationYear = parseInt(yearInput);
    if (!titleInput || !authorInput || isNaN(publicationYear)) {
        alert("Please fill in all fields with valid data.");
        return;
    }
    var book = {
        title: titleInput,
        author: authorInput,
        publicationYear: publicationYear,
    };
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "\n        <h2>Book Details:</h2>\n        <p><strong>Title:</strong> ".concat(book.title, "</p>\n        <p><strong>Author:</strong> ").concat(book.author, "</p>\n        <p><strong>Publication Year:</strong> ").concat(book.publicationYear, "</p>\n    ");
});
