'use strict';

let cheesePrice = {
    "american": 0.19,
    "jack": 0.25,
    "munster": 0.30,
    "none": 0.00,
};

module.exports.getCheesePrice = (cheeseType) => {
    return cheesePrice[cheeseType];
};