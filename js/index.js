let minusBut = document.getElementById("pantsMinusBut");
let addBut = document.getElementById("pantsAddBut");

function minus () {
    let label = document.getElementById ("pantsQty");
    label.innerHTML = parseInt (label.innerHTML) -1;
}

function add () {
    let label = document.getElementById ("pantsQty");
    label.innerHTML = parseInt (label.innerHTML) +1;
}

minusBut.addEventListener ("click", minus);
addBut.addEventListener ("click", add);