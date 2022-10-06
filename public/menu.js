const iconBurger = document.querySelector("#iconBurger");
const iconX = document.querySelector("#iconX");
const x = document.querySelector('#menux')
console.log(x)
const dropdown = document.querySelector("#dropdown");

let isOpen = false;

function toggleMenu(){
    if(isOpen == false){
        iconBurger.classList.add('hidden')
        iconX.classList.remove('hidden')
        dropdown.classList.remove('animate-Leaving','hidden')
        dropdown.classList.add('animate-Entering')
        isOpen = true;
    } else {
        iconBurger.classList.remove('hidden')
        iconX.classList.add('hidden')
        dropdown.classList.remove('animate-Entering')
        dropdown.classList.add('animate-Leaving','hidden')
        isOpen = false;
    }
    

};

x.addEventListener('click', toggleMenu)