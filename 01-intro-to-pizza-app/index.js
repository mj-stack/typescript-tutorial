var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var menu = [];
var cashInRegister = 100;
var orderQueue = [];
var pizzaId = 1;
function addNewPizza(pizza) {
    var newPizza = __assign({ id: pizzaId++ }, pizza);
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
function addToArray(array, item) {
    array.push(item);
    return array;
}
addToArray(menu, { id: pizzaId++, name: "Chicken Bacon Ranch", price: 12 });
addToArray(orderQueue, { id: orderId++, pizza: menu[2], status: "completed" });
console.log(menu);
console.log(orderQueue);
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
