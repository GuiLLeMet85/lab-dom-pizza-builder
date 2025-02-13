// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
        if (state.pepperoni) {
            onePep.style.visibility = 'visible';
        } else {
            onePep.style.visibility = 'hidden';
        }
    });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
    document.querySelectorAll('.mushroom').forEach((mushroom) => {
        if (state.mushrooms) {
            mushroom.style.visibility = "visible";
        } else {
            mushroom.style.visibility = "hidden";
        }   
    });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
    document.querySelectorAll('.green-pepper').forEach((greenPepper) => {
        if (state.greenPeppers){
            greenPepper.style.visibility = "visible";
        } else {
            greenPepper.style.visibility = "hidden";
        }
    });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
    document.querySelectorAll('.sauce').forEach((toggleSauce) => {
		if (state.whiteSauce) {
			toggleSauce.classList.add('sauce-white');
		} else {
			toggleSauce.classList.remove('sauce-white');
		}
	});
}


function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
    document.querySelectorAll('.crust').forEach((toggleCrust) => {
        if (state.glutenFreeCrust) {
             toggleCrust.classList.add('crust-gluten-free');
        } else {	
             toggleCrust.classList.remove('crust-gluten-free');	
        }
    });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
        if (state.pepperoni) {
            document.querySelector('.btn-pepperoni').classList.add('active');
        } else {
            document.querySelector('.btn-pepperoni').classList.remove('active');
        }
        if (state.greenPeppers) {
            document.querySelector('.btn-green-peppers').classList.add('active');
        } else {
            document.querySelector('.btn-green-peppers').classList.remove('active');
        }
        if (state.mushrooms) {
            document.querySelector('.btn-mushrooms').classList.add('active');
        } else {
            document.querySelector('.btn-mushrooms').classList.remove('active');
        }
        if (state.whiteSauce) {
            document.querySelector('.btn-sauce').classList.add('active');
        } else {
            document.querySelector('.btn-sauce').classList.remove('active');
        }
        if (state.glutenFreeCrust) {
            document.querySelector('.btn-crust').classList.add('active');
        } else {
            document.querySelector('.btn-crust').classList.remove('active');
        }
}


  // Iteration 4: change the HTML of `<aside class="panel price">`
  // Displays the list of all items selected
  // Displays the total price.


/* Doesn't Work....
  function renderPrice() {
  
        const parent = document.querySelector('.panel.price ul');
             parent.innerHTML = "";
    
}

renderEverything();
*/

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
    document.querySelector('.btn.btn-pepperoni').addEventListener('click',function () {
        state.pepperoni = !state.pepperoni;
    renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

    document.querySelector('.btn.btn-mushrooms').addEventListener('click',() =>{
        state.mushrooms = !state.mushrooms;
    renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

    document.querySelector('.btn.btn-green-peppers').addEventListener('click',() => {
        state.greenPeppers = !state.greenPeppers;
    renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

    document.querySelector('.btn.btn-sauce').addEventListener('click',() => {
        state.whiteSauce = !state.whiteSauce;
    renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

    document.querySelector('.btn.btn-crust').addEventListener('click',() => {
        state.glutenFreeCrust = !state.glutenFreeCrust;
    renderEverything();
});