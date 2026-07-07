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

}


function getQuantity(id){

    const cart = getCart();

    const item = cart.find(food => food.id === id);

    return item ? item.quantity : 0;

}