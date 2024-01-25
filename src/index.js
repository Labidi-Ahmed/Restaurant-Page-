document.addEventListener("DOMContentLoaded", function () {
    var header = document.querySelector("header");


    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            header.classList.add("header-border-animated");
        } else {
            header.classList.remove("header-border-animated");
        }
    });
});



import { generateHomePage } from "./modules/homepage.js";

const logo = document.querySelector("#logo");


    logo.addEventListener('click',() =>{
        const homeContainer = document.querySelector("#home-container");
        if (!homeContainer){
            generateHomePage();
        }
    });

