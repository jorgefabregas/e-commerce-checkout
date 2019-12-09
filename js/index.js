let minusBut = document.getElementById("pantsMinusBut");
let addBut = document.getElementById("pantsAddBut");
let minus_But = document.getElementById("shirtsMinusBut");
let add_But = document.getElementById("shirtsAddBut");

let calculateBtn = document.getElementById ('calcBut');
let coupButton = document.getElementById ('promoButton');

let pantsQty = 0;
let pantsPri = 40.99;
let extPrice = 0;

let shirtsQty = 0;
let shirtsPri = 10.99;

document.getElementById ('pantsQty').innerHTML = `${pantsQty}`;
document.getElementById ('pants_price').innerHTML = `$${pantsPri}`;
document.getElementById ('pants_extendpri').innerHTML = `${extPrice}`;

document.getElementById ('shirtsQty').innerHTML = `${shirtsQty}`;
document.getElementById ('shirt_price').innerHTML = `$${shirtsPri}`;
document.getElementById ('shirt_extendpri').innerHTML = `${extPrice}`;

function minus (itemsQty) {
    if (itemsQty >= 0) {
        return 0;}
    else {
        return (--itemsQty);}
}
function add (itemsQty) {
    return (++itemsQty);
}
function giveExtPrice (price, itemsQty) {

}

function minusPants () {
    let minusPants = minus(document.getElementById ('pantsQty').innerHTML);
    let pantsPri = 40.99;
    let extPrice = giveExtPrice(minusPants,pantsPri);

    document.getElementById ('pantsQty').innerHTML = `${minusPants}`;
    document.getElementById ('pants_price').innerHTML = `${pantsPri}`;
    document.getElementById ('pants_extendpri').innerHTML = `${extPrice.toFixed (2)}`;
}
function addPants () {
    let addPants = add (document.getElementById ('pantsQty').innerHTML);
    let pantsPri = 40.99;
    let extPrice = giveExtPrice(addPants,pantsPri);

    document.getElementById ('pantsQty').innerHTML = `${addPants}`;
    document.getElementById ('pants_price').innerHTML = `${pantsPri}`;
    document.getElementById ('pants_extendpri').innerHTML = `${extPrice.toFixed (2)}`;
}
function minusShirts () {
    let minusShirts = minus(document.getElementById ('shirtsQty').innerHTML);
    let shirtsPri = 10.99;
    let extPrice = giveExtPrice(minusShirts,shirtsPri);

    document.getElementById ('shirtsQty').innerHTML = `${minusShirts}`;
    document.getElementById ('shirt_price').innerHTML = `${shirtsPri}`;
    document.getElementById ('shirt_extendpri').innerHTML = `${extPrice.toFixed (2)}`;
}
function addShirts () {
    let addShirts = add (document.getElementById ('shirtsQty').innerHTML);
    let shirtsPri = 10.99;
    let extPrice = giveExtPrice(addShirts,shirtsPri);

    document.getElementById ('shirtsQty').innerHTML = `${addShirts}`;
    document.getElementById ('shirt_price').innerHTML = `${shirtsPri}`;
    document.getElementById ('shirt_extendpri').innerHTML = `${extPrice.toFixed (2)}`;
}
minusBut.addEventListener ("click", minusPants);
addBut.addEventListener ("click", addPants);
minus_But.addEventListener ("click", minusShirts);
add_But.addEventListener ("click", addShirts);

function calculTotals () {
    let pantsExtPrice = parseFloat (document.getElementById ('pants_extendpri').innerHTML);
    let shirtsExtPrice = parseFloat (document.getElementById ('shirt_extendpri').innerHTML);
    let subtotal = pantsExtPrice + shirtsExtPrice;
    let tax = subtotal * 13/100;
    let total = subtotal + tax;
    let coupon = document.getElementById ('promoText').value;
    let validation = validCode (coupon);

    if (validation == "NOTAX") {
        tax = 0;
        total = subtotal;}
    
    if (validation == "FIFTYFIFTY") {
        subtotal = (pantsExtPrice + shirtsExtPrice)/2;
        tax = subtotal * 13/100;
        total = subtotal + tax;}

    if (validation == false) {
        document.getElementById ('promoButton').innerHTML = "Please, Enter a Valid Coupon";}
}

document.getElementById ('subtotal').innerHTML = `${subtotal.toFixed(2)}`;
document.getElementById ('tax').innerHTML = `${tax.toFixed(2)}`;
document.getElementById ('total').innerHTML = `${total.toFixed(2)}`;

function validCode (coupon) {
    let firstCode = "NOTAX";
    let secondCode = "FIFTYFIFTY";
    let validIn = document.getElementById ('promoText').value; 
    
    if (validIn.toUpperCase() == firstCode.toUpperCase()){
        return firstCode;}
    if (validIn.toUpperCase() == secondCode.toUpperCase()){
        return secondCode;}
    else {
        document.getElementById ('promoText').innerHTML = "Please, Enter a Valid Coupon";
        return false;}
}
function showCode () {
    document.getElementById ('promoText').display = "inline-block";
}

calcBut.addEventListener ("click", calculTotals)
promoButton.addEventListener ("click", function(){
    promoText.classList.toggle ('show')
});

/* function minus () {
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
add_But.addEventListener ("click", add_shirt); */







