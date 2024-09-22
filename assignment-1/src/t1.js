var cart = [];
while (true) {
  var itemName = prompt("Enter item name (or press Enter to finish):");
  if (itemName === null || itemName.trim() === "") {
    break;
  }
  var priceInput = prompt("Enter item price:");
  if (priceInput === null) {
    break;
  }
  var itemPrice = parseFloat(priceInput);
  if (isNaN(itemPrice)) {
    alert("Invalid price entered, please try again.");
    continue;
  }
  var quantityInput = prompt("Enter item quantity:");
  if (quantityInput === null) {
    break;
  }
  var itemQuantity = parseInt(quantityInput);
  if (isNaN(itemQuantity)) {
    alert("Invalid quantity entered, please try again.");
    continue;
  }
  var newItem = {
    name: itemName,
    price: itemPrice,
    quantity: itemQuantity,
  };
  cart.push(newItem);
}
var totalCost = cart
  .map(function (item) {
    return item.price * item.quantity;
  })
  .reduce(function (sum, cost) {
    return sum + cost;
  }, 0);
alert("Total cost of the shopping cart: $".concat(totalCost.toFixed(2)));
