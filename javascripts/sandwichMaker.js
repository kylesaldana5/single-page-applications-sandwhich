'use strict';

require("./DOMinteraction");
let bread = require('./bread');
let total = 0;

let sandwich = {
    "bread": [],
    "meat": [],
    "chesse": [],
    "veggies": [],
    "condiments": [],
};

// figure out how to make multiple category calls depending on the id 
module.exports.addIngredient = (id, value) => {
    sandwich[id].push(value);
    total += bread.addBread(value);
};

module.exports.getTotal = () => {
    return total;
};

module.exports.getSandwich = () => {
    return sandwich;
};