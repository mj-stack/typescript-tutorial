type Pizza = {
  name: string,
  price: number
}
type Order = {
  id: number,
  pizza: Pizza,
  status: "ordered" | "completed"
}

const menu = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Hawaiian", price: 10 },
  { name: "Veggie", price: 9 },
];

let cashInRegister = 100;
const orderQueue: Order[] = [];

function addNewPizza(pizza: Pizza) {
  menu.push(pizza);
}

addNewPizza({ name: "My Mac", price: 20 });


let id = 0;
function placeOrder(pizzaName: string) {
  if (menu.some((pizzaObj) => pizzaObj.name === pizzaName)) {
    const pizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
    if (!pizza) {
      return
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

function completeOrder(orderId: number) {
  const order = orderQueue.find((orderObj: Order) => orderObj.id === orderId);
  if (!order) {
    console.log(`${orderId} was not in the order queue`)
    return
  }
  order.status = "completed";
  return order;
}

placeOrder("Margherita");
placeOrder("Pepperoni");
console.log(menu);
console.log(cashInRegister);
console.log(orderQueue);
console.log(completeOrder(1));
