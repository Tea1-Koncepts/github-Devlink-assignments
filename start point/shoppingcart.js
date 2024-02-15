console.log("This is for Shopping cart");

function calculateTotalCost(cart) {
  console.log("Welcome to Shopping Cart");
  let totalcost = 0;
  for (let a = 0; a < cart.length; a++) {
    totalcost += cart[a].price;
  }
  return totalcost;
}
const shoppingcart = [
  { item: "Milo refill", price: 2000 },
  { item: "Peak Milk refill", price: 2500 },
  { item: "Indomitables", price: 7500 },
];
const totalcost = calculateTotalCost(shoppingcart);
console.log("Total Cost:", totalcost);
