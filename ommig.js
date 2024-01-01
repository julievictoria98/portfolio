"use strict"

window.addEventListener("load", main)

function main() {
    setEventListeners()
}

function setEventListeners() {
    document.querySelector("#button").addEventListener("mouseup", navigateToProjects)
}

function navigateToProjects() {
    window.location = "index.html?scrollTo=grid1-1-1-1-1";
}