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
import { generateAboutPage } from "./modules/about.js";
import { generateMenuPage } from "./modules/menu.js";
const logo = document.querySelector("#logo");
const about = document.querySelector("#about");
const pageContainer = document.querySelector(".page-container");
const menu = document.querySelector("#menu");
const aboutUs = document.querySelector(".container-btn");


 function loadThePageContainer(container){
if (pageContainer.id != container.id){
    pageContainer.id =container.id;
    pageContainer.innerHTML = container.innerHTML;
    console.log("finished");
   

}
else{
    return false
}
}


logo.addEventListener('click',() =>{
    const homeContainer = generateHomePage();
    loadThePageContainer(homeContainer);
    const aboutUs = document.querySelector(".container-btn");
    if( aboutUs !=null ){
       
        
        aboutUs.addEventListener('click',() =>{
            const aboutContainer = generateAboutPage();
            loadThePageContainer(aboutContainer);
            
            
        });
       
    }
    
});


    about.addEventListener('click',() =>{
        const aboutContainer = generateAboutPage();
        loadThePageContainer(aboutContainer);
        
    });


   


menu.addEventListener('click', () =>{
    const menuContainer = generateMenuPage();
    loadThePageContainer(menuContainer);
})


aboutUs.addEventListener('click',() =>{
    const aboutContainer = generateAboutPage();
    loadThePageContainer(aboutContainer);
   
    
});

