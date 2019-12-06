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

var total_items = 2;

function updateExtPants() {
		
    let pantsID = document.getElementById("pantsQty");
    let extPantsPrice = extPantsPrice + parseInt(pantsID.value) * parseInt(pantsID.getAttribute("data-price"));
	document.getElementById("pants_extendpri").innerHTML = "$" + extPantsPrice;
}






