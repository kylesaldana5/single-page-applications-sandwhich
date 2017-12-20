'use strict';

let meatPrice = {
    "turkey": 0.19,
    "ham": 0.25,
    "bacon": 0.30,
    "none": 0.00,
};

module.exports.addMeat = (meatType) => {
    return meatPrice[meatType];
};