'use strict';


let menu = document.getElementById("menu");
let submit = document.getElementById("submit");
let bread = document.getElementById("bread");
let meat = document.getElementById("meat");
let cheese = document.getElementById("cheese");
let condiments = document.getElementById("condiments");
let veggies = document.getElementById("veggies");
let output = document.getElementById("output");
let sandwichMaker = require("./sandwichMaker");

// EL for submit button 
submit.addEventListener("click", () =>{
    output.innerHTML = `${sandwichMaker.getTotal()} ${sandwichOutput(sandwichMaker.getSandwich())}`;
});


menu.addEventListener('change', () =>{
    sandwichMaker.addIngredient(event.target.closest("div").id, event.target.value);
    
});

let sandwichOutput = (sandwichObject) => {
    let sandwichString =  "";
    for(let ingredient in sandwichObject){
        console.log(sandwichObject[ingredient]);
        for (let i = 0; i < sandwichObject[ingredient].length; i++) {
            sandwichString += `${sandwichObject[ingredient][i]} `;
            
        }
    }
    return sandwichString;
};
