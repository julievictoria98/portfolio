"use strict"

window.addEventListener("load", setEventListeners)

function setEventListeners(){
    document.querySelector("#hamburger").addEventListener("click", dropMenu)
}

function dropMenu(){
    document.querySelector("#nav_menu").classList.toggle("active");
}