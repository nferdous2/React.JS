const marseCost = 5000;
const moonCost = 3000;
// let marsQuantity = document.getElementById('mars-quantity').value;
// let moonQuantity = document.getElementById('moon-quantity').value;
function handleQuantity(planet, operator) {
    //input field er quantity increment or decrement korar jonno
    //dynamically input take
    const quantityInput = document.getElementById(planet + '-quantity').value;
    //covert to num
    let quantity = parseInt(quantityInput);
    //increment quantity
    if (operator == 'plus') {
        quantity = quantity + 1;
    }
    else {
        //error handeling
        if (quantity < 1) {
            return;
        }
        quantity = quantity - 1;
    }

    document.getElementById(planet + '-quantity').value = quantity;
    //function between function
    calculateJourney(planet);
    updateTotal();
}
function calculateJourney(planet) {
    const quantityInput = document.getElementById(planet + '-quantity').value;
    let quantity = parseInt(quantityInput);
    if (planet === 'mars') {
        let marsTotal = marseCost * quantity;
        updateUI(planet, marsTotal);
    }
    else {
        let moonTotal = marseCost * quantity;
        updateUI(planet, moonTotal);
    }
}
function updateUI(planet, total) {
    const planetTotal = document.getElementById(planet + '-total');
    planetTotal.innerText = total;
}
function updateTotal() {
    const marsQuantityInput = document.getElementById('mars-quantity').value;
    const moonQuantityInput = document.getElementById('moon-quantity').value;
    let marsQuantity = parseInt(marsQuantityInput);
    let moonQuantity = parseInt(moonQuantityInput);
    let total = marsQuantity * marsQuantityInput + moonQuantity * moonCost;
    document.getElementById(total).innerText = total;
}
