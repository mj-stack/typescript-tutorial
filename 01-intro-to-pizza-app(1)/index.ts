type Pizza = {
  id: number;
  name: string;
  price: number;
};
type Order = {
  id: number;
  pizza: Pizza;
  status: "ordered" | "completed";
};

const menu: Pizza[] = [
  { id: 1, name: "Margherita", price: 8 },
  { id: 2, name: "Pepperoni", price: 10 },
  { id: 3, name: "Hawaiian", price: 10 },
  { id: 4, name: "Veggie", price: 9 },
];

let cashInRegister = 100;
const orderQueue: Order[] = [];

function addNewPizza(pizza: Pizza): void {
  menu.push(pizza);
}

addNewPizza({ id: 5, name: "My Mac", price: 20 });
addNewPizza({ id: 6, name: "Chicken BBQ", price: 20 });

let id = 0;
function placeOrder(pizzaName: string): Order | undefined {
  if (menu.some((pizzaObj) => pizzaObj.name === pizzaName)) {
    const pizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
    if (!pizza) {
      return;
    }
    cashInRegister += pizza.price;
    const newOrder: Order = { id: id, pizza: pizza, status: "ordered" };
    orderQueue.push(newOrder);
    id++;
    return newOrder;
  } else {
    return;
  }
}

function completeOrder(orderId: number): Order | undefined {
  const order = orderQueue.find((orderObj: Order) => orderObj.id === orderId);
  if (!order) {
    console.log(`${orderId} was not in the order queue`);
    return;
  }
  order.status = "completed";
  return order;
}

const getPizzaDetail = (
  identifier: Pizza | string | number
): Pizza | undefined => {
  if (typeof identifier === "string") {
    return menu.find(
      (pizza) => pizza.name.toLowerCase() === identifier.toLowerCase()
    );
  } else if (typeof identifier === "number") {
    return menu.find((pizza) => pizza.id === identifier);
  } else {
    throw new TypeError(
      "Parameter `identifier` must be either a string or a number"
    );
  }
};

console.log(getPizzaDetail("Margherita"));
console.log(getPizzaDetail(2));
// placeOrder("Margherita");
// placeOrder("Pepperoni");
// console.log(menu);
// console.log(cashInRegister);
// console.log(orderQueue);
// console.log(completeOrder(1));
