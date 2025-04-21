var menu = [
    { id: 1, name: "Margherita", price: 8 },
    { id: 2, name: "Pepperoni", price: 10 },
    { id: 3, name: "Hawaiian", price: 10 },
    { id: 4, name: "Veggie", price: 9 },
];
var cashInRegister = 100;
var orderQueue = [];
function addNewPizza(pizza) {
    menu.push(pizza);
}
addNewPizza({ id: 5, name: "My Mac", price: 20 });
addNewPizza({ id: 6, name: "Chicken BBQ", price: 20 });
var id = 0;
function placeOrder(pizzaName) {
    if (menu.some(function (pizzaObj) { return pizzaObj.name === pizzaName; })) {
        var pizza = menu.find(function (pizzaObj) { return pizzaObj.name === pizzaName; });
        if (!pizza) {
            return;
        }
        cashInRegister += pizza.price;
        var newOrder = { id: id, pizza: pizza, status: "ordered" };
        orderQueue.push(newOrder);
        id++;
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
    if (!identifier) {
        console.log("Identifier is required");
        return;
    }
    if (typeof identifier === "string") {
        return menu.find(function (pizza) { return pizza.name.toLowerCase() === identifier.toLowerCase(); });
    }
    if (typeof identifier === "number") {
        return menu.find(function (pizza) { return pizza.id === identifier; });
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
