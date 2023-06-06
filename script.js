const menuWrapper = document.getElementById('menu-wrapper');
const menuPageWrapper = document.getElementById('menu-page-wrapper');
const section_4 = document.querySelector('.section-4');
const section_5 = document.getElementById('section-5');
let menuColOne = document.getElementById('menu-col-1');
let menuColTwo = document.getElementById('menu-col-2');
const form = document.getElementById('gift-card-form');
const giftTypeSelect = document.getElementById('gift-card-type');
const giftQuantInput = document.getElementById('gift-card-amount');
let giftSumEl = document.getElementById('gift-sum');

let giftCardType = parseInt(giftTypeSelect.value);
let giftCardQuantity = 1;

const menu = [
    { 
        category: 'Breakfast', 
        items: [
            { title: "Big Biscuit + Gravy",  ingredients: ['Avocado', 'Sun-dried Tomato', 'Garlic Aioli', 'Chives'],  price: 24 },
            { title: "Big Biscuit + Gravy",  ingredients: ['Avocado', 'Sun-dried Tomato', 'Garlic Aioli', 'Chives'],  price: 24 },
            { title: "Big Biscuit + Gravy",  ingredients: ['Avocado', 'Sun-dried Tomato', 'Garlic Aioli', 'Chives'],  price: 24 },
        ]   
    },
    {
        category: 'Starters',
        items: [
            { title: "Machos Nachos", ingredients: ['Avocado', 'Sun-dried Tomato', 'Garlic Aioli', 'Chives'], price: 18 },
            { title: "Machos Nachos", ingredients: ['Avocado', 'Sun-dried Tomato', 'Garlic Aioli', 'Chives'], price: 18 },
        ]
    },
    {
        category: 'Burgers',
        items: [
            { title: "Reuben", ingredients: ['Avocado', 'Sun-dried Tomato', 'Garlic Aioli', 'Chives'], price: 17 },
            { title: "Reuben", ingredients: ['Avocado', 'Sun-dried Tomato', 'Garlic Aioli', 'Chives'], price: 17 },
            { title: "Reuben", ingredients: ['Avocado', 'Sun-dried Tomato', 'Garlic Aioli', 'Chives'], price: 17 },
        ]
    },
    {
        category: 'Coffee',
        items: [
            { title: "Espresso", ingredients: ['Espresso', 'Hot Water'], price: 17 },
            { title: "Espresso", ingredients: ['Espresso', 'Hot Water'], price: 17 },
            { title: "Espresso", ingredients: ['Espresso', 'Hot Water'], price: 17 },
            { title: "Espresso", ingredients: ['Espresso', 'Hot Water'], price: 17 },
            { title: "Espresso", ingredients: ['Espresso', 'Hot Water'], price: 17 },
            { title: "Espresso", ingredients: ['Espresso', 'Hot Water'], price: 17 },
        ]
    },
    {
        category: 'Bowls',
        items: [
            { title: "Acai Bowl", ingredients: ['Avocado', 'Sun-dried Tomato', 'Garlic Aioli', 'Chives'], price: 17 },
            { title: "Acai Bowl", ingredients: ['Avocado', 'Sun-dried Tomato', 'Garlic Aioli', 'Chives'], price: 17 },
            { title: "Acai Bowl", ingredients: ['Avocado', 'Sun-dried Tomato', 'Garlic Aioli', 'Chives'], price: 17 },
            { title: "Acai Bowl", ingredients: ['Avocado', 'Sun-dried Tomato', 'Garlic Aioli', 'Chives'], price: 17 },
            { title: "Acai Bowl", ingredients: ['Avocado', 'Sun-dried Tomato', 'Garlic Aioli', 'Chives'], price: 17 },
            { title: "Acai Bowl", ingredients: ['Avocado', 'Sun-dried Tomato', 'Garlic Aioli', 'Chives'], price: 17 },
        ]
    },
    {
        category: 'Bowls',
        items: [
            { title: "Acai Bowl", ingredients: ['Avocado', 'Sun-dried Tomato', 'Garlic Aioli', 'Chives'], price: 17 },
            { title: "Acai Bowl", ingredients: ['Avocado', 'Sun-dried Tomato', 'Garlic Aioli', 'Chives'], price: 17 },
            { title: "Acai Bowl", ingredients: ['Avocado', 'Sun-dried Tomato', 'Garlic Aioli', 'Chives'], price: 17 },
            { title: "Acai Bowl", ingredients: ['Avocado', 'Sun-dried Tomato', 'Garlic Aioli', 'Chives'], price: 17 },
            { title: "Acai Bowl", ingredients: ['Avocado', 'Sun-dried Tomato', 'Garlic Aioli', 'Chives'], price: 17 },
            { title: "Acai Bowl", ingredients: ['Avocado', 'Sun-dried Tomato', 'Garlic Aioli', 'Chives'], price: 17 },
        ]
    },

];

// Events 
giftTypeSelect.addEventListener('change', (e) => {
    giftCardType = parseInt(e.target.value);
    setGiftSum();
});

giftQuantInput.addEventListener('input', (e) => {
    giftCardQuantity = e.target.value;
    setGiftSum();
})



function initMenu() {
    menu.map((value, index) => {
        if(index % 2 === 0) {
            arrangeMenuByCols(value, menuColOne);  
        } else {
            arrangeMenuByCols(value, menuColTwo);
        }
    })
}

function setGiftSum() {
    giftSumEl.innerHTML = "";
    
    giftSumEl.innerText = formatMoney(giftCardType * giftCardQuantity);
}


initMenu();
setGiftSum();


function arrangeMenuByCols(value, menuColEl) {
    const menuBlockEl = document.createElement('div');
    menuBlockEl.classList.add('menu-block');

    const menuCategoryEl = document.createElement('h2');
    menuCategoryEl.classList.add('menu-category');
    menuCategoryEl.innerText = value.category;
    menuBlockEl.appendChild(menuCategoryEl);

    const menuItemEl = document.createElement('div');
    menuItemEl.classList.add('menu-item');
    menuBlockEl.appendChild(menuItemEl);

    value.items.map((item) => {
         const menuItemTitleEl = document.createElement('h3');
         menuItemTitleEl.classList.add('menu-item-title');
         menuItemTitleEl.innerText = item.title;
         menuItemEl.appendChild(menuItemTitleEl);

         const menuIngredientsListEl = document.createElement('ul');
         menuIngredientsListEl.classList.add('menu-ingredients-list');

         item.ingredients.map((ingredient) => {
             const menuIngredientEl = document.createElement('li');
             menuIngredientEl.classList.add('menu-ingredient');
             menuIngredientEl.innerText = ingredient;
             menuIngredientsListEl.appendChild(menuIngredientEl);
            
         });
         menuItemEl.appendChild(menuIngredientsListEl);

         const menuItemPriceEl = document.createElement('span');
         menuItemPriceEl.classList.add('menu-item-price');
         menuItemPriceEl.innerText = formatMoney(item.price);
         menuItemEl.appendChild(menuItemPriceEl);
    });

    menuColEl.appendChild(menuBlockEl);

}

function formatMoney(amount) {
    return "NiS" + (amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');  
}

const objOptions = {
    root: null,
    threshold: 0.3,
    rootMargin: "0px"
}

const theObserver = new IntersectionObserver(callbackFunction, objOptions);
theObserver.observe(section_4);

function callbackFunction(entries) {
    const [ entry ] = entries;
    let txtWrapper = document.querySelector('.section-4 .txt-wrapper');

    if(entry.isIntersecting) {
        txtWrapper.classList.add('withBg');
    } else {
        txtWrapper.classList.remove('withBg');
    }
}

initializeMenu();





