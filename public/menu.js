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

/*Entering: "duration-200 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"*/


x.addEventListener('click', toggleMenu)