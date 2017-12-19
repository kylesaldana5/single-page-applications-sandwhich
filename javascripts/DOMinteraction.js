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
    console.log("button clicked");
});


menu.addEventListener('change', () =>{
    sandwichMaker.addIngredient(event.target.closest("div").id, event.target.value);
    
});