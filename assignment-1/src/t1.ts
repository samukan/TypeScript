interface Item {
  name: string;
  price: number;
  quantity: number;
}

const cart: Item[] = [];

while (true) {
  const itemName = prompt("Enter item name (or press Enter to finish):");
  if (itemName === null || itemName.trim() === "") {
    break;
  }

  const priceInput = prompt("Enter item price:");
  if (priceInput === null) {
    break;
  }
  const itemPrice = parseFloat(priceInput);
  if (isNaN(itemPrice)) {
    alert("Invalid price entered, please try again.");
    continue;
  }

  const quantityInput = prompt("Enter item quantity:");
  if (quantityInput === null) {
    break;
  }
  const itemQuantity = parseInt(quantityInput);
  if (isNaN(itemQuantity)) {
    alert("Invalid quantity entered, please try again.");
    continue;
  }

  const newItem: Item = {
    name: itemName,
    price: itemPrice,
    quantity: itemQuantity,
  };
  cart.push(newItem);
}

const totalCost = cart
  .map((item) => item.price * item.quantity)
  .reduce((sum, cost) => sum + cost, 0);

alert(`Total cost of the shopping cart: $${totalCost.toFixed(2)}`);
