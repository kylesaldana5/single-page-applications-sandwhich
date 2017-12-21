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

// when 'none' is selected the other boxs are cleared, 
// if none is checked and you select another one none needs to be cleared 
// if none is selected you have to clear that catergories total out 
// if something is clicked more than once can't continue to add the price
function clearCheckboxs(div) {
  let checkCheckboxs = div.getElementsByClassName(div.id);
  for (let i = 0; i < checkCheckboxs.length; i++) {
      sandwichMaker.clearCategoryTotal(div.id, checkCheckboxs[i]);
      checkCheckboxs[i].checked = false;
  }

  
}

menu.addEventListener('change', () =>{
    let category = event.target.closest("div");
   let none = category.getElementsByClassName("none");
   console.log(none);
    if (event.target.value === "none"){
        clearCheckboxs(category);
    } else {
        none[0].checked = false;
    }
    if (!event.target.checked) {
        sandwichMaker.removeIngredient(category.id, event.target.value);
    }
    else if (event.target.checked){
        sandwichMaker.addIngredient(category.id, event.target.value);
    }
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
