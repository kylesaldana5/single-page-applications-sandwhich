'use strict';

require("./DOMinteraction");
let bread = require('./bread');
let meat = require('./meat');
let veggies = require('./veggies');
let condiments = require('./condiments');
let cheese = require('./cheese');
let total = 0;

let sandwich = {
    "bread": [],
    "meat": [],
    "cheese": [],
    "veggies": [],
    "condiments": [],
};

// figure out how to make multiple category calls depending on the id 
module.exports.addIngredient = (id, value) => {
    sandwich[id].push(value);
    switch (id){
        case "bread":
        total += bread.addBread(value);
        break;
        case "meat":
        total += meat.addMeat(value);
        break;
        case "cheese":
        total += cheese.addCheese(value);
        break;
        case "veggies":
        total += veggies.addVeggies(value);
        break;
        case "condiments":
        total += condiments.addCondiments(value);

    }
    return Math.floor(total);
};

module.exports.removeIngredient = (id, value) => {
    sandwich[id].splice(sandwich[id].indexOf(value), 1);
    switch (id) {
        case "bread":
            total -= bread.addBread(value);
            break;
        case "meat":
            total -= meat.addMeat(value);
            break;
        case "cheese":
            total -= cheese.addCheese(value);
            break;
        case "veggies":
            total -= veggies.addVeggies(value);
            break;
        case "condiments":
            total -= condiments.addCondiments(value);

    }
    return Math.floor(total);

};

module.exports.getTotal = () => {
    return total;
};

module.exports.getSandwich = () => {
    return total;
};