let menu = [];

// CREATE CARD

function createCard(item){

    return `

    <div class="food-card">

        <img src="${item.img}" alt="${item.name}">

        <h3>${item.name}</h3>

        <p>${item.description}</p>

        <div class="price-row">

            <span class="price">

                ${item.price}

            </span>

            <div class="quantity-selector" data-id="${item["item-id"]}">

                <button class="minus">−</button>

                <span class="count">${getQuantity(item["item-id"])}</span>

                <button class="plus">+</button>

            </div>

        </div>

    </div>

    `;

}


async function loadMenu() {

    const response = await fetch("../data/menu.json");

    menu = await response.json();

    menu.forEach(item => {

        const container = document.getElementById(item.category + "Container");

        if(container){

            container.innerHTML += createCard(item);

        }

    });

}

loadMenu();

function getQuantity(id){

    const cart = getCart();
    const item = cart.find(food => food.id === id);
    return item ? item.quantity : 0;
}

// PLUS MINUS LOGIC

document.addEventListener("click", (event) => {

    const plusBtn = event.target.closest(".plus");
    const minusBtn = event.target.closest(".minus");

    if(!plusBtn && !minusBtn) return;

    const selector = event.target.closest(".quantity-selector");

    if(!selector) return;

    const count = selector.querySelector(".count");

    if(!count) return;

    let quantity = Number(count.textContent) || 0;

    const id = Number(selector.dataset.id);
    const menuItem = menu.find(item => item["item-id"] === id);

    if(plusBtn){

        addToCart({

            id: menuItem["item-id"],
            item: menuItem.item,
            name: menuItem.name,
            price: menuItem.price,
            image: menuItem.img

        });

    } 
    else if(minusBtn){
        
        removeFromCart (id)
    }

    count.textContent = getQuantity(id);

});


// FILTER

const buttons = document.querySelectorAll(".filter-btn");
const menusections = document.querySelectorAll(".menu-section");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {

    // remove active from all buttons
    buttons.forEach(b => b.classList.remove("active"));

    // add active to clicked button
    btn.classList.add("active");

    const target = btn.dataset.target;

    // show/hide sections
    menusections.forEach(section => {

      if (target === "all") {
        section.style.display = "block";
      } 
      else if (section.classList.contains(target)) {
        section.style.display = "block";
      } 
      else {
        section.style.display = "none";
      }

    });

  });
});