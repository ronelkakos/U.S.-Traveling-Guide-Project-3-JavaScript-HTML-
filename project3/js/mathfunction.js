/* Ronel Kakos */
/* Project 1 */
/* mathfunction.js */

function calculateBudget() {
    let airplaneCost = parseFloat(document.getElementById("airplaneCost").value);
    let hotelCost = parseFloat(document.getElementById("hotelCost").value);
    let shoppingCost = parseFloat(document.getElementById("shoppingCost").value);
    let foodCost = parseFloat(document.getElementById("foodCost").value);

    let totalCost = airplaneCost + hotelCost + shoppingCost + foodCost;
    let taxAmount = totalCost * 0.06;
    let totalWithTax = totalCost + taxAmount;

    document.getElementById("totalCost").innerHTML = "Total Cost (with 6% sales tax) = $" + totalWithTax.toFixed(2);
}

document.getElementById("calculateButton").addEventListener("click", calculateBudget);