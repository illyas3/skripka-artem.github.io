let burger = document.getElementById("burger")
let top_menu = document.getElementById("top-menu") 
let burger_close = document.getElementById("burger-close")


function Burger_menu () {
    top_menu.classList.add('active');
}

function Close_menu () {
    top_menu.classList.remove('active');
}

burger.addEventListener("click", Burger_menu)
burger_close.addEventListener("click", Close_menu)


