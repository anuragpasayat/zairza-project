function getCart(){

    return JSON.parse(localStorage.getItem("cart")) || [];

}

function saveCart(cart){

    localStorage.setItem("cart", JSON.stringify(cart));

}

// add tiems

function addToCart(item){

    const cart = getCart();

    const existing = cart.find(food => food.id === item.id);

    if(existing){

        existing.quantity++;

    }
    else{

        item.quantity = 1;

        cart.push(item);

    }

    saveCart(cart);

    if (typeof updateCartPreview === 'function'){
        updateCartPreview();
    }

}

// remove items

function removeFromCart(id){

    let cart = getCart();

    const item = cart.find(food => food.id === id);

    if(!item) return;

    item.quantity--;

    if(item.quantity <= 0){

        cart = cart.filter(food => food.id !== id);

    }

    saveCart(cart);

    if (typeof updateCartPreview === 'function'){
        updateCartPreview();
    }

}


function getQuantity(id){

    const cart = getCart();

    const item = cart.find(food => food.id === id);

    return item ? item.quantity : 0;

}

// CART PREVIEW

function updateCartPreview(){

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const preview = document.getElementById("cartPreview");

    if(cart.length===0){
        preview.classList.remove("show");
        return;
    }

    let totalItems=0;
    let totalPrice=0;

    cart.forEach(item=>{
        totalItems += item.quantity;
        totalPrice += item.price * item.quantity
    });

    document.getElementById("cartCount").innerHTML =
        `${totalItems} ${totalItems>1?"Items":"Item"}`;

    document.getElementById("cartPrice").innerHTML =
        `₹${totalPrice}`;

    preview.classList.add("show");
}

document.getElementById("cartPreview").onclick=()=>{
    window.location.href="orders.html";
}

document.addEventListener("DOMContentLoaded", () => {
    updateCartPreview();
});