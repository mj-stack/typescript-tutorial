var menu = [];
var cashInRegister = 100;
var orderQueue = [];
var pizzaId = 1;
function addNewPizza(pizza) {
    menu.push(pizza);
    pizza.id = pizzaId;
    pizzaId++;
}
addNewPizza({ id: pizzaId, name: "Margherita", price: 8 });
addNewPizza({ id: pizzaId, name: "Pepperoni", price: 10 });
addNewPizza({ id: pizzaId, name: "Hawaiian", price: 10 });
addNewPizza({ id: pizzaId, name: "Veggie", price: 9 });
addNewPizza({ id: pizzaId, name: "My Mac", price: 20 });
addNewPizza({ id: pizzaId, name: "Chicken BBQ", price: 20 });
console.log(menu);
var orderId = 0;
function placeOrder(pizzaName) {
    if (menu.some(function (pizzaObj) { return pizzaObj.name === pizzaName; })) {
        var pizza = menu.find(function (pizzaObj) { return pizzaObj.name === pizzaName; });
        if (!pizza) {
            return;
        }
        cashInRegister += pizza.price;
        var newOrder = { id: orderId, pizza: pizza, status: "ordered" };
        orderQueue.push(newOrder);
        orderId++;
        return newOrder;
    }
    else {
        return;
    }
}
function completeOrder(orderId) {
    var order = orderQueue.find(function (orderObj) { return orderObj.id === orderId; });
    if (!order) {
        console.log("".concat(orderId, " was not in the order queue"));
        return;
    }
    order.status = "completed";
    return order;
}
var getPizzaDetail = function (identifier) {
    if (typeof identifier === "string") {
        return menu.find(function (pizza) { return pizza.name.toLowerCase() === identifier.toLowerCase(); });
    }
    else if (typeof identifier === "number") {
        return menu.find(function (pizza) { return pizza.id === identifier; });
    }
    else {
        throw new TypeError("Parameter `identifier` must be either a string or a number");
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
