var gameScores = [14, 21, 33, 42, 59];
var favouriteThings = [
    "raindrops on roses",
    "whiskers on kittens",
    "bright copper kettles",
    "warm woolen mittens",
];
var voters = [
    { name: "Alice", age: 42 },
    { name: "Bob", age: 77 },
];
function getLastItem(array) {
    return array[array.length - 1];
}
console.log(getLastItem(gameScores));
console.log(getLastItem(favouriteThings));
console.log(getLastItem(voters));
console.log("Hello");
