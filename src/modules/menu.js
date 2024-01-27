export function generateMenuPage() {
    const menuContainerContent = `
    <div class="menu-category" id="main-courses">
        <div class="menu-header">MENU</div>
        <div class="menu-section-header">Main Courses</div>
        
        <div class="menu-section-elements">
            <div class="item-info">
                <div class="food">Serenade Signature Pasta<span class="price">$16.99</span></div>
                <div class="description">Homemade pasta with a rich signature sauce</div>
            </div>
        </div>
    
        <div class="menu-section-elements">
            <div class="item-info">
                <div class="food">Grilled Sea Bass<span class="price">$22.99</span></div>
                <div class="description">Fresh sea bass grilled to perfection with herbs</div>
            </div>
        </div>
    
        <div class="menu-section-elements">
            <div class="item-info">
                <div class="food">Vegetarian Delight<span class="price">$18.99</span></div>
                <div class="description">A medley of seasonal vegetables in a light herb-infused broth</div>
            </div>
        </div>
        <div class="menu-section-elements">
            <div class="item-info">
                <div class="food">Bruschetta Trio<span class="price">$10.99</span></div>
                <div class="description">A trio of bruschettas: classic tomato, olive tapenade, and goat cheese</div>
            </div>
        </div>

        <div class="menu-section-elements">
            <div class="item-info">
                <div class="food">Crispy Calamari<span class="price">$11.99</span></div>
                <div class="description">Golden-fried calamari rings with a zesty lemon aioli</div>
            </div>
        </div>
        <!-- Add more main course items as needed -->
    
    </div>
    
    <div class="menu-category" id="desserts">
        <div class="menu-section-header">Desserts</div>
        
        <div class="menu-section-elements">
            <div class="item-info">
                <div class="food">Decadent Chocolate Torte<span class="price">$10.99</span></div>
                <div class="description">Indulgent chocolate torte with berry compote</div>
            </div>
        </div>
    
        <div class="menu-section-elements">
            <div class="item-info">
                <div class="food">Citrus Panna Cotta<span class="price">$8.99</span></div>
                <div class="description">Smooth panna cotta infused with refreshing citrus flavors</div>
            </div>
        </div>
    
        <div class="menu-section-elements">
            <div class="item-info">
                <div class="food">Artisan Cheese Board<span class="price">$14.99</span></div>
                <div class="description">Selection of fine cheeses paired with house-made preserves</div>
            </div>
        </div>
    
        <!-- Add more dessert items as needed -->
    
    </div>
    
    <div class="menu-category" id="beverages">
        <div class="menu-section-header">Beverages</div>
        
        <div class="menu-section-elements">
            <div class="item-info">
                <div class="food">Serenade Sunset Cocktail<span class="price">$8.99</span></div>
                <div class="description">Tropical cocktail with a hint of serenade magic</div>
            </div>
        </div>
    
        <div class="menu-section-elements">
            <div class="item-info">
                <div class="food">Herbal Infusion Tea<span class="price">$5.99</span></div>
                <div class="description">A soothing blend of handpicked herbs for a delightful tea experience</div>
            </div>
        </div>
    
        <div class="menu-section-elements">
            <div class="item-info">
                <div class="food">Serenade Bistro Special Blend Coffee<span class="price">$4.99</span></div>
                <div class="description">Our unique coffee blend, perfect for a post-dinner treat</div>
            </div>
        </div>
    
        <!-- Add more beverage items as needed -->
    
    </div>
    `;

    const menuContainer = document.createElement('div');
    menuContainer.id = 'menu-container' ;
    menuContainer.innerHTML = menuContainerContent;

    return menuContainer;
}
