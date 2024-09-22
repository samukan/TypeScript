(function () {
  interface ElectronicDevice {
    type: "electronic";
    brand: string;
    model: string;
  }

  interface Book {
    type: "book";
    title: string;
    author: string;
  }

  type Product = ElectronicDevice | Book;

  function displayProductDetails(product: Product, elementId: string) {
    const container = document.getElementById(elementId);
    if (!container) return;

    let htmlContent = `<h3>Product Type: ${product.type}</h3>`;
    if (product.type === "electronic") {
      htmlContent += `<p><strong>Brand:</strong> ${product.brand}</p>`;
      htmlContent += `<p><strong>Model:</strong> ${product.model}</p>`;
    } else if (product.type === "book") {
      htmlContent += `<p><strong>Title:</strong> ${product.title}</p>`;
      htmlContent += `<p><strong>Author:</strong> ${product.author}</p>`;
    }

    container.innerHTML = htmlContent;
  }

  // Handle electronic device form submission
  const electronicForm = document.getElementById(
    "electronicForm"
  ) as HTMLFormElement;
  electronicForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const brandInput = (document.getElementById("brand") as HTMLInputElement)
      .value;
    const modelInput = (document.getElementById("model") as HTMLInputElement)
      .value;

    if (!brandInput || !modelInput) {
      alert("Both brand and model are required. Please try again.");
      return;
    }

    const electronicProduct: ElectronicDevice = {
      type: "electronic",
      brand: brandInput,
      model: modelInput,
    };

    displayProductDetails(electronicProduct, "electronicProductDetails");
  });

  // Handle book form submission
  const bookForm = document.getElementById("bookForm") as HTMLFormElement;
  bookForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const titleInput = (document.getElementById("title") as HTMLInputElement)
      .value;
    const authorInput = (document.getElementById("author") as HTMLInputElement)
      .value;

    if (!titleInput || !authorInput) {
      alert("Both title and author are required. Please try again.");
      return;
    }

    const bookProduct: Book = {
      type: "book",
      title: titleInput,
      author: authorInput,
    };

    displayProductDetails(bookProduct, "bookProductDetails");
  });
})();
