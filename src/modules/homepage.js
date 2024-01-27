 import homeImg from '../images/homeImg.jpg' 

export function generateHomePage() {
    const homeContainerContent = `
    <div id="container">
    <div class="container-logo">Serenade Bistro</div>
    <div class="container-text">At Serenade Bistro, we embrace the artistry of coffee. Our passion goes beyond the ordinary, where every cup is crafted with precision—melding time, temperature, and technique to create the perfect blend. Our devotion extends to the beans, meticulously roasted to perfection, ensuring each sip is an experience worth savoring.</div>
    <button class="container-btn">About us</button>
    </div>
    <img  class="container-img" src="${homeImg}">
    `;

    const homeContainer = document.createElement('div');
    homeContainer.id = 'home-container';
    homeContainer.innerHTML = homeContainerContent ;

        return homeContainer;
}