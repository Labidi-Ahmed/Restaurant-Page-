import chefImg from  '../images/chef.png';


export function generateAboutPage() {
    // Get the body element
    const body = document.querySelector("body");

    // Create the aboutPage element
    const aboutPage = document.createElement('div');
    aboutPage.id = "about-page";

    // Create the aboutLogo div
    const aboutLogo = document.createElement('div');
    aboutLogo.classList.add("about-logo");

    // Create sub-elements for aboutLogo
    const aboutLogoHead = document.createElement('div');
    aboutLogoHead.innerHTML = "Harmony of Flavors, Elegance in Every Bite";

    const aboutLogoText = document.createElement('div');
    aboutLogoText.innerHTML = "At Serenade Bistro, we invite you to experience a culinary symphony where the notes of flavor create a harmonious melody. Our journey is a celebration of diverse tastes, bringing together elements from different corners of the culinary world.";
    aboutLogoText.classList.add("about-logo-text");

    // Append sub-elements to aboutLogo
    aboutLogo.appendChild(aboutLogoHead);
    aboutLogo.appendChild(aboutLogoText);

    // Create the aboutContainer div
    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add("about-container");

    // Create sub-elements for aboutContainer
    const chefImageContainer = document.createElement('div');
    chefImageContainer.classList.add("chef-image-container");

    // Create an image element for the chef
    const chef = document.createElement('img');
    chef.classList.add("chef");
    chef.src = chefImg ;

    // Append chef image to its container
    chefImageContainer.appendChild(chef);

    // Create the aboutChef div
    const aboutChef = document.createElement('div');
    aboutChef.classList.add("about-chef");

    // Create sub-elements for aboutChef
    const aboutChefHeader = document.createElement('div');
    aboutChefHeader.innerHTML = "OUR CULINARY MAESTRO";
    aboutChefHeader.classList.add("about-chef-header");

    const aboutChefSection = document.createElement('div');
    aboutChefSection.classList.add("about-chef-section");
    aboutChefSection.innerHTML = "Meet our culinary maestro, Chef Alessandra Rossi. A seasoned artisan with roots deeply embedded in the rich culinary heritage of Italy, Chef Rossi brings a wealth of experience and a palate attuned to the finest nuances of flavor. Chef Rossi's culinary journey began in the charming kitchens of Tuscany, where she mastered the art of handmade pasta and perfected the balance of rustic simplicity and modern sophistication. Her gastronomic pilgrimage led her through the diverse regions of Italy, each dish a love letter to the local ingredients and time-honored techniques.";

    const aboutChefFooter = document.createElement("div");
    aboutChefFooter.classList.add("about-chef-footer");
    aboutChefFooter.innerHTML = "Now at the helm of Serenade Bistro, Chef Rossi curates a menu that dances between classic Italian fare and contemporary culinary innovations. Each dish is a serenade, a harmonious expression of flavors, textures, and colors.";

    // Append sub-elements to aboutChef
    aboutChef.appendChild(aboutChefHeader);
    aboutChef.appendChild(aboutChefSection);
    aboutChef.appendChild(aboutChefFooter);

    // Append chef image container and aboutChef to aboutContainer
    aboutContainer.appendChild(chefImageContainer);
    aboutContainer.appendChild(aboutChef);

    // Append aboutLogo and aboutContainer to aboutPage
    aboutPage.appendChild(aboutLogo);
    aboutPage.appendChild(aboutContainer);

    // Append aboutPage to the body
    return aboutPage ;
}
