(function () {
  type Book = {
    title: string;
    author: string;
    publicationYear: number;
  };

  document
    .getElementById("bookForm")!
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const titleInput = (document.getElementById("title") as HTMLInputElement)
        .value;
      const authorInput = (
        document.getElementById("author") as HTMLInputElement
      ).value;
      const yearInput = (document.getElementById("year") as HTMLInputElement)
        .value;

      const publicationYear = parseInt(yearInput);

      if (!titleInput || !authorInput || isNaN(publicationYear)) {
        alert("Please fill in all fields with valid data.");
        return;
      }

      const book: Book = {
        title: titleInput,
        author: authorInput,
        publicationYear: publicationYear,
      };

      const resultDiv = document.getElementById("result")!;
      resultDiv.innerHTML = `
        <h2>Book Details:</h2>
        <p><strong>Title:</strong> ${book.title}</p>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Publication Year:</strong> ${book.publicationYear}</p>
    `;
    });
})();
