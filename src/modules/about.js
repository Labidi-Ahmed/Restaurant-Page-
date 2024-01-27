import chefImg from  '../images/chef.png'; 


export function generateAboutPage() {
    const aboutContainerContent =  `<div class="about-logo"><div>Harmony of Flavors, Elegance in Every Bite</div>
    <div class="about-logo-text">At Serenade Bistro, we invite you to experience a culinary symphony where the notes of flavor create a harmonious melody. Our journey is a celebration of diverse tastes, bringing together elements from different corners of the culinary world.</div>
        
    </div>

    <div class="about-container">
    
        <div class="chef-image-container"><img class="chef" src="${chefImg}" alt=""></div>
    <div class="about-chef">
        <div class="about-chef-header">OUR CULINARY MAESTRO</div>
        <div class="about-chef-section">Meet our culinary maestro, Chef Alessandra Rossi. A seasoned artisan with roots deeply embedded in the rich culinary heritage of Italy, Chef Rossi brings a wealth of experience and a palate attuned to the finest nuances of flavor.

            Chef Rossi's culinary journey began in the charming kitchens of Tuscany, where she mastered the art of handmade pasta and perfected the balance of rustic simplicity and modern sophistication. Her gastronomic pilgrimage led her through the diverse regions of Italy, each dish a love letter to the local ingredients and time-honored techniques.</div>
        <div class="about-chef-footer">Now at the helm of Serenade Bistro, Chef Rossi curates a menu that dances between classic Italian fare and contemporary culinary innovations. Each dish is a serenade, a harmonious expression of flavors, textures, and colors.</div>

    </div>
    
 </div>`


    const aboutContainer = document.createElement('div');
    aboutContainer.id = 'about-page';
    aboutContainer.innerHTML = aboutContainerContent;
    return aboutContainer;

    
}
