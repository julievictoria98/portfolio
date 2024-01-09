"use strict"

window.addEventListener("load", main);

function main(){
    setEventListeners();
    scrollToQueryString();
}

function setEventListeners(){
    document.querySelector("#aboutme_btn").addEventListener("mouseup", navigate);
}

function navigate(){
    window.location = "ommig.html";
}

function scrollToQueryString(){
    const searchParams = new URLSearchParams(window.location.search);

    if (searchParams.has("scrollTo")){
        document.querySelector("#" + searchParams.get("scrollTo")).scrollIntoView();
    }
}