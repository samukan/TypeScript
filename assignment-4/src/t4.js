(function () {
    function displayProductDetails(product, elementId) {
        var container = document.getElementById(elementId);
        if (!container)
            return;
        var htmlContent = "<h3>Product Type: ".concat(product.type, "</h3>");
        if (product.type === "electronic") {
            htmlContent += "<p><strong>Brand:</strong> ".concat(product.brand, "</p>");
            htmlContent += "<p><strong>Model:</strong> ".concat(product.model, "</p>");
        }
        else if (product.type === "book") {
            htmlContent += "<p><strong>Title:</strong> ".concat(product.title, "</p>");
            htmlContent += "<p><strong>Author:</strong> ".concat(product.author, "</p>");
        }
        container.innerHTML = htmlContent;
    }
    // Handle electronic device form submission
    var electronicForm = document.getElementById("electronicForm");
    electronicForm.addEventListener("submit", function (event) {
        event.preventDefault();
        var brandInput = document.getElementById("brand")
            .value;
        var modelInput = document.getElementById("model")
            .value;
        if (!brandInput || !modelInput) {
            alert("Both brand and model are required. Please try again.");
            return;
        }
        var electronicProduct = {
            type: "electronic",
            brand: brandInput,
            model: modelInput,
        };
        displayProductDetails(electronicProduct, "electronicProductDetails");
    });
    // Handle book form submission
    var bookForm = document.getElementById("bookForm");
    bookForm.addEventListener("submit", function (event) {
        event.preventDefault();
        var titleInput = document.getElementById("title")
            .value;
        var authorInput = document.getElementById("author")
            .value;
        if (!titleInput || !authorInput) {
            alert("Both title and author are required. Please try again.");
            return;
        }
        var bookProduct = {
            type: "book",
            title: titleInput,
            author: authorInput,
        };
        displayProductDetails(bookProduct, "bookProductDetails");
    });
})();
