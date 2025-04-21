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

const menu: Pizza[] = [];

let cashInRegister = 100;
const orderQueue: Order[] = [];

let pizzaId: number = 1;

function addNewPizza(pizza: Omit<Pizza, "id">): Pizza {
  const newPizza = {
    id: pizzaId++,
    ...pizza,
  };
  menu.push(newPizza);
  return newPizza;
}

addNewPizza({ name: "Margherita", price: 8 });
addNewPizza({ name: "Pepperoni", price: 10 });
addNewPizza({ name: "Hawaiian", price: 10 });
addNewPizza({ name: "Veggie", price: 19 });
addNewPizza({ name: "My Mac", price: 20 });
addNewPizza({ name: "Chicken BBQ", price: 20 });
console.log(menu);

let orderId = 0;
function placeOrder(pizzaName: string): Order | undefined {
  if (menu.some((pizzaObj) => pizzaObj.name === pizzaName)) {
    const pizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
    if (!pizza) {
      return;
    }
    cashInRegister += pizza.price;
    const newOrder: Order = { id: orderId, pizza: pizza, status: "ordered" };
    orderQueue.push(newOrder);
    orderId++;
    return newOrder;
  } else {
    return;
  }
}

function addToArray<T>(array: T[], item: T): T[] {
  array.push(item);
  return array;
}

addToArray<Pizza>(menu, {
  id: pizzaId++,
  name: "Chicken Bacon Ranch",
  price: 12,
});
addToArray<Order>(orderQueue, {
  id: orderId++,
  pizza: menu[2],
  status: "completed",
});

console.log(menu);
console.log(orderQueue);

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

// console.log(getPizzaDetail("Margherita"));
// console.log(getPizzaDetail(2));
// placeOrder("Margherita");
// placeOrder("Pepperoni");
// console.log(menu);
// console.log(cashInRegister);
// console.log(orderQueue);
// console.log(completeOrder(1));
