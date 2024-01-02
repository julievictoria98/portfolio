"use strict"
window.addEventListener("load", main);


function main() {
    setEventListeners();
    scrollToQueryString();
}

function setEventListeners(){
    document.querySelector("#aboutme_btn").addEventListener("mouseup", function() {
        navigate("ommig.html");
    });
}

function navigate(url) {
    window.location = url;
}

function scrollToQueryString(){
    const searchParams = new URLSearchParams(window.location.search);

    if (searchParams.has("scrollTo")) {
        document.querySelector("#" + searchParams.get("scrollTo")).scrollIntoView();
    }
}