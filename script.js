const btnsAddTag = document.getElementsByClassName("plus");
const btnsMinusTag = document.getElementsByClassName("minus");
const btRemove = document.getElementsByClassName("delete");
const btLike = document.getElementsByClassName("like");
var checkTags = document.querySelectorAll(".check");
for (var i = 0; i < btnsAddTag.length; i++) {
    btnsAddTag[i].addEventListener("click", increment);
    btnsMinusTag[i].addEventListener("click", increment);
    btRemove[i].addEventListener("click", deleteFN);
    btLike[i].addEventListener("click", likeFN);
    checkTags[i].onclick = totalPrice;
}
function likeFN(event) {
    if (event.target.style.color == 'red') {
        event.target.style.color = '#FFF';
    }
    else {
        event.target.style.color = 'red';
    }
}
function deleteFN(event) {
    var block = event.target.parentElement.parentElement.parentElement.parentElement;
    block.parentNode.removeChild(block);
    totalPrice();
}
function increment(event) {
    var btnPlus = event.target;
    var divElt = btnPlus.parentElement;
    var quantityTag = divElt.querySelector("p");
    var quantity = Number(quantityTag.innerHTML);
    if (event.target.innerHTML == "+") {
        quantity++;
    }
    else if (quantity > 0) {
        quantity--;
    }
    quantityTag.innerHTML = quantity;
    var priceTag = divElt.parentElement.parentElement.querySelector(".price");
    var unitPriceTag =
        divElt.parentElement.parentElement.querySelector(".unitPrice");
    var unitPrice = Number(unitPriceTag.innerHTML);
    var price = unitPrice * quantity;
    priceTag.innerHTML = price;
    totalPrice();
}
function totalPrice(event) {
    var checkTag = document.getElementsByClassName("check");
    var priceTag = document.getElementsByClassName("price");
    var totalTag = document.getElementById("total");
    var total = 0;
    for (var j = 0; j < priceTag.length; j++) {
        if (checkTag[j].checked === true) {
            total += Number(priceTag[j].innerHTML);
        }
    }
    totalTag.innerHTML = " " + total;
}