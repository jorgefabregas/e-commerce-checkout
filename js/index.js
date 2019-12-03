let minusBut = document.getElementById("pantsMinusBut");
let addBut = document.getElementById("pantsAddBut");
let minus_But = document.getElementById("shirtsMinusBut");
let add_But = document.getElementById("shirtsAddBut");

function minus () {
    let label = document.getElementById ("pantsQty");
    label.innerHTML = parseInt (label.innerHTML) -1;
}

function minus_shirt () {
    let label = document.getElementById ("shirtsQty");
    label.innerHTML = parseInt (label.innerHTML) -1;
}

function add () {
    let label = document.getElementById ("pantsQty");
    label.innerHTML = parseInt (label.innerHTML) +1;
}

function add_shirt () {
    let label = document.getElementById ("shirtsQty");
    label.innerHTML = parseInt (label.innerHTML) +1;
}

minusBut.addEventListener ("click", minus);
addBut.addEventListener ("click", add);
minus_But.addEventListener ("click", minus_shirt);
add_But.addEventListener ("click", add_shirt);

var pricePants = getElementById ('pants_price');
var qtyPants = getElementById ('pantsQty'.value);
var extPricePants = parseFloat(2) (getElementById ('pants_extendpri'));
extPricePants = (qtyPants*qtyPants);

console.log ('hello')