function Constructor(price, calories) {
    this.price = price;
    this.calories = calories;
}
//розміри
const SIZE_SMALL = new Constructor(50, 20);
const SIZE_AVERAGE = new Constructor(75, 30);
const SIZE_LARGE = new Constructor(100, 40);
//начинки
const CHEESE = new Constructor(10, 20);
const SALAD = new Constructor(20, 5);
const POTATO = new Constructor(15, 10);
const SPICE = new Constructor(15, 0);
const TOPPING_MAYO  = new Constructor(20, 5);

function Hamburger(size) {
    this.price = size.price;
    this.calories = size.calories;
    this.addModifier = function(modifier) {
        this.price += modifier.price;
        this.calories += modifier.calories;
    }
    this.getPrice = function() {
        return this.price;
    }
    this.getCalories = function() {
        return this.calories;
    }
}
const hamburger = new Hamburger(SIZE_SMALL);
hamburger.addModifier(TOPPING_MAYO);
hamburger.addModifier(POTATO);

console.log("Price with sauce: " + hamburger.getPrice());
console.log("Calories with sauce: " + hamburger.getCalories());