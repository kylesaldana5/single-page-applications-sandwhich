'use strict';

let veggiesPrice = {
    "peppers": 0.19,
    "onions": 0.25,
    "lettuce": 0.30,
    "none": 0.00,
};

module.exports.addVeggies = (veggiesType) => {
    return veggiesPrice[veggiesType];
};