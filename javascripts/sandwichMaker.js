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
        total += bread.getBreadPrice(value);
        // total += bread.breadTotal();
        break;
        case "meat":
        total += meat.getMeatPrice(value);
        break;
        case "cheese":
        total += cheese.getCheesePrice(value);
        break;
        case "veggies":
        total += veggies.getVeggiesPrice(value);
        break;
        case "condiments":
        total += condiments.getCondimentsPrice(value);

    }
    console.log("total cost", total);
    return total.toFixed(2);
};

module.exports.removeIngredient = (id, value) => {
    sandwich[id].splice(sandwich[id].indexOf(value), 1);
    switch (id) {
        case "bread":
            total -= bread.getBreadPrice(value);
            break;
        case "meat":
            total -= meat.getMeatPrice(value);
            break;
        case "cheese":
            total -= cheese.getCheesePrice(value);
            break;
        case "veggies":
            total -= veggies.getVeggiesPrice(value);
            break;
        case "condiments":
            total -= condiments.getCondimentsPrice(value);

    }
    console.log("total cost", total);
    return total.toFixed(2);

};

module.exports.clearCategoryTotal = (id, ingredient) => {
    console.log(ingredient);
    if (ingredient.checked){
        switch (id) {
            case "bread": 
            total -= bread.getBreadPrice(ingredient.value).toFixed(2);
            break;
            case "meat":
            total -= meat.getMeatPrice(ingredient.value).toFixed(2);
            break;
            case "cheese":
            total -= cheese.getCheesePrice(ingredient.value).toFixed(2);
            break;
            case "condiments":
            total -= condiments.getCondimentsPrice(ingredient.value).toFixed(2);
            break;
            case "veggies":
            total -= veggies.getVeggiesPrice(ingredient.value).toFixed(2);
            break;
        

        }
    
     
    }

};

module.exports.getTotal = () => {
    return total.toFixed(2);
};

module.exports.getSandwich = () => {
    return total.toFixed(2);
};