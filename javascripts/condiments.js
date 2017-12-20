'use strict';

let condimentsPrice = {
    "ketchup": 0.19,
    "mustard": 0.25,
    "mayo": 0.30,
    "none": 0.00,
};

module.exports.addCondiments = (condimentsType) => {
    return condimentsPrice[condimentsType];
};