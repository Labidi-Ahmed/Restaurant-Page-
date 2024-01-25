export function generateHomePage() {
    const body = document.querySelector("body");
    const text = "At Serenade Bistro, we embrace the artistry of coffee. Our passion goes beyond the ordinary, where every cup is crafted with precision—melding time, temperature, and technique to create the perfect blend. Our devotion extends to the beans, meticulously roasted to perfection, ensuring each sip is an experience worth savoring.";

    // Create homeContainer element
    const homeContainer = document.createElement('div');
    homeContainer.id = "home-container"
    
    // Create container div
    const container = document.createElement('div');
    container.id = "container";

    // Create containerLogo div
    const containerLogo = document.createElement('div');
    containerLogo.classList.add("container-logo");
    containerLogo.innerHTML = "Serenade Bistro";

    // Create containerText div
    const containerText = document.createElement('div');
    containerText.classList.add("container-text");
    containerText.innerHTML = text;

    // Create containerBtn div
    const containerBtn = document.createElement('div');
    containerBtn.classList.add("container-btn");
    containerBtn.innerHTML = "About us";

    // Append child elements to container
    container.appendChild(containerLogo);
    container.appendChild(containerText);
    container.appendChild(containerBtn);

    // Create img element
    const img = document.createElement('img');
    img.src = "./images/pexels-edward-eyer-1049626.jpg";
    img.classList.add("container-img");

    // Append child elements to section
    
    homeContainer.appendChild(container);
    homeContainer.appendChild(img);

    // Append section to body
    body.appendChild(homeContainer);
}
