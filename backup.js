const menuWrapper = document.getElementById('menu-wrapper');
const menuPageBtns = document.querySelectorAll('.menu-page-btn');
const menuPageWrapper = document.getElementById('menu-page-wrapper');

const menu = [
    { 
        category: 'Breakfast', 
        items: [
            { title: "Big Biscuit + Gravy",  description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque suscipit impedit quidem deleniti modi aliquid.",  price: 24 },
            { title: "Big Biscuit + Gravy",  description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque suscipit impedit quidem deleniti modi aliquid.",  price: 24 },
            { title: "Big Biscuit + Gravy",  description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque suscipit impedit quidem deleniti modi aliquid.",  price: 24 },
        ]   
    },
    {
        category: 'Starters',
        items: [
            { title: "Machos Nachos", description: "house masa chips, chorizo, pickled peppers, black beans, cheddar, sour cream, avocado", price: 18 },
            { title: "Machos Nachos", description: "house masa chips, chorizo, pickled peppers, black beans, cheddar, sour cream, avocado", price: 18 },
        ]
    },
    {
        category: 'Burgers',
        items: [
            { title: "Reuben", description: "smoked corned beef, kimchi, kraut, havarti cheese, special sauce, rye *can be gf on masa/ can be df", price: 17 },
            { title: "Reuben", description: "smoked corned beef, kimchi, kraut, havarti cheese, special sauce, rye *can be gf on masa/ can be df", price: 17 },
            { title: "Reuben", description: "smoked corned beef, kimchi, kraut, havarti cheese, special sauce, rye *can be gf on masa/ can be df", price: 17 },
        ]
    }
];


initMenu();

function formatMoney(amount) {
    return (amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');  
}

// Initialize menu
function initMenu(index = 0) {
    clearMenuDOM(); 

    let item = menu[index];
    let menuItems = menu[index].items;

    const category = document.createElement('h2');
    category.classList.add('category');
    category.innerText = item.category;

    menuWrapper.appendChild(category);

    menuItems.forEach((menuItem) => {
        const menuItemDiv = document.createElement('div');
        menuItemDiv.classList.add('menu-item');
        menuItemDiv.innerHTML = `
            <div class="menu-heading-wrapper">
                <h2 class="item-title">${menuItem.title}</h2>
                <h2>NIS${menuItem.price}</h2>
            </div>
            <p class="menu-text">${menuItem.description}</p>
        `
        menuWrapper.appendChild(menuItemDiv);
    });

    populateMenuPages();
}

// Clear Menu from DOM
function clearMenuDOM() {
    menuWrapper.innerHTML = "";
}

// Populate menu pages by category count
function populateMenuPages() {
    let pageLength = menu.length;

    for(let i = 1; i <= pageLength; i++) {
       let pageBtn = document.createElement('button');
       pageBtn.innerText = i;
       pageBtn.classList.add('menu-page-btn');
       pageBtn.addEventListener('click', (e) => initMenu(i - 1));
       menuPageWrapper.appendChild(pageBtn);
    }

    menuWrapper.appendChild(menuPageWrapper);
}

populateMenuPages();

// Events

// Add click event on each page button 
