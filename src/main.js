function Constructor(name, price, calories) {
    this.name = name;
    this.price = price;
    this.calories = calories;
}
//розміри
const SIZE_SMALL = new Constructor("Burger small", 50, 20);
const SIZE_AVERAGE = new Constructor("Burger everage", 75, 30);
const SIZE_LARGE = new Constructor("Burger large", 100, 40);
//начинки
const CHEESE = new Constructor("Cheese", 10, 20);
const SALAD = new Constructor("Salad", 20, 5);
const POTATO = new Constructor("Potato", 15, 10);
const SPICE = new Constructor("Spice", 15, 0);
const TOPPING_MAYO  = new Constructor("Mayo", 20, 5);

function Hamburger(size) {
    this.price = size.price;
    this.calories = size.calories;
    this.modifiers = [];
    this.addModifier = function(modifier) {
        this.price += modifier.price;
        this.calories += modifier.calories;
        this.modifiers.push (modifier);
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