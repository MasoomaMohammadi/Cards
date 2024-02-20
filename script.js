function calculateTax(subtotal) {
    console.log("Running calculateTax function");
    const tax = subtotal * 0.0875;
    console.log(tax);
    return tax;
}

function calculateTotal(subtotal, tax) {
    console.log("Running calculateTotal function");
    const total = subtotal + tax;
    console.log(total);
    return total;
}

function order(cost) {
    console.log("Running order function");
    
    let Subtotal = parseFloat(
      document.querySelector("#Subtotal").innerText
    );
    let updatedSubtotal = Subtotal + cost;
    console.log(updatedSubtotal);
    
    let tax = calculateTax(updatedSubtotal);
    let total = calculateTotal(updatedSubtotal, tax);
    
    document.querySelector("#Subtotal").innerText = updatedSubtotal.toFixed(2);
    document.querySelector("#tax").innerText = tax.toFixed(2);
    document.querySelector("#total").innerText = total.toFixed(2);
}

document.querySelector("#product1").onclick = function () {
  order(50); 
};
document.querySelector("#product2").onclick = function () {
  order(100);
};
document.querySelector("#product3").onclick = function () {
  order(30);
};
