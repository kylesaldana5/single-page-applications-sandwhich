'use strict';
let breadCost = 0;
let breadPrices = {
    "white": 0.19,
    "wheat": 0.25,
    "rye": 0.30,
    "none": 0.00,
};
// module.exports.addBread = (breadType) => {
//     breadCost += breadPrices[breadType];
//     console.log(breadCost);
//     return breadCost;
// };

// module.exports.removeBread = (breadType) => {
//     breadCost -= breadPrices[breadType];
//     console.log(breadCost);
//     return breadCost;
// };

module.exports.getBreadPrice = (breadType) => {
    return breadPrices[breadType];
};

module.exports.breadTotal = () => breadCost;