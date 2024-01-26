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
import './styles/reset.css';
import './styles/style.css'
import homeImg from './images/homeImg.jpg';
import { generateContactPage } from "./modules/contact.js";
const logo = document.querySelector("#logo");
const about = document.querySelector("#about");
const pageContainer = document.querySelector(".page-container");
const menu = document.querySelector("#menu");
const aboutUs = document.querySelector(".container-btn");
const containerImg = document.querySelector(".container-img");
const contact = document.querySelector("#contact");


if(containerImg){
    containerImg.src = homeImg ;
}


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

contact.addEventListener('click',() =>{
    const contactContainer = document.createElement('div');
    contactContainer.innerHTML = generateContactPage();
    contactContainer.id='contact-container';
    
   loadThePageContainer(contactContainer);
});