const menu = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Hawaiian", price: 10 },
  { name: "Veggie", price: 9 },
];

let cashInRegister = 100;
const orderQueue = [];

function addNewPizza(pizza) {
  menu.push(pizza);
}

addNewPizza({ name: "My Mac", price: 20 });

let id = 0;
function placeOrder(pizzaName) {
  if (menu.some((pizzaObj) => pizzaObj.name === pizzaName)) {
    const pizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
    cashInRegister += pizza.price;
    const newOrder = { id: id, pizza: pizza, status: "ordered" };
    orderQueue.push(newOrder);
    id++;
    return newOrder;
  } else {
    return;
  }
}

function completeOrder(orderId) {
  const order = orderQueue.find((orderObj) => orderObj.id === orderId);
  order.status = "completed";
  return order;
}

placeOrder("Margherita");
placeOrder("Pepperoni");
console.log(menu);
console.log(cashInRegister);
console.log(orderQueue);
console.log(completeOrder(1));
