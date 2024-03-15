
const settings = document.getElementById("settings");

const menu = document.getElementById("menu-btn");

const close = document.getElementById("close-btn");

menu.addEventListener("click" ,function (){
    settings.classList.add("active");
    settings.style.left ="0";
});
close.addEventListener("click" ,function (){
    settings.classList.remove("active");
    settings.style.left="-100%";
});

const arr = [7, 4, 8, 2, 10, 5, 6, 3, 1, 9];

const caja = document.getElementById("Caja");

const spanElements = caja.querySelectorAll("span");

const Start = document.getElementById("Start"); 

Start.addEventListener("click", function(){
    caja.innerHTML = '';

    arr.forEach(function(item) {
        
        const span = document.createElement('span');
        
        span.textContent = item;
        span.classList.add('array-container');
        
        span.classList.add('array-element');
        
        caja.appendChild(span);
        
        
        span.style.animation ="slideMenuOn .8s ease";
        
        /* const element = document.getElementsByClassName("array-element");
        element.style.background ="red"; */
        
    });
});