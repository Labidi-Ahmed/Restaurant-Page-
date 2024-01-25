export function generateMenuPage() {
    const body = document.querySelector("body");

    // Create menuContainer element
    const menuContainer = document.createElement('div');
    menuContainer.id = "menu-container";
    
    // Main Courses
    const mainCoursesCategory = document.createElement('div');
    mainCoursesCategory.classList.add("menu-category");
    mainCoursesCategory.id = "main-courses";
    
    // Menu Header (Only in the first category)
    const menuHeader = document.createElement('div');
    menuHeader.classList.add("menu-header");
    menuHeader.innerHTML = "MENU";
    mainCoursesCategory.appendChild(menuHeader);

    const mainCoursesHeader = document.createElement('div');
    mainCoursesHeader.classList.add("menu-section-header");
    mainCoursesHeader.innerHTML = "Main Courses";
    mainCoursesCategory.appendChild(mainCoursesHeader);

    const mainCoursesElements = [
        { food: "Serenade Signature Pasta", description: "Homemade pasta with a rich signature sauce", price: "$16.99" },
        { food: "Grilled Sea Bass", description: "Fresh sea bass grilled to perfection with herbs", price: "$22.99" },
        { food: "Vegetarian Delight", description: "A medley of seasonal vegetables in a light herb-infused broth", price: "$18.99" },
        { food: "Bruschetta Trio", description: "A trio of bruschettas: classic tomato, olive tapenade, and goat cheese", price: "$10.99" },
        { food: "Crispy Calamari", description: "Golden-fried calamari rings with a zesty lemon aioli", price: "$11.99" }
    ];

    mainCoursesElements.forEach(item => {
        const menuSectionElements = document.createElement('div');
        menuSectionElements.classList.add("menu-section-elements");

        const itemInfo = document.createElement('div');
        itemInfo.classList.add("item-info");

        const food = document.createElement('div');
        food.classList.add("food");
        food.innerHTML = `${item.food}<span class="price">${item.price}</span>`;
        
        const description = document.createElement('div');
        description.classList.add("description");
        description.innerHTML = item.description;

        itemInfo.appendChild(food);
        itemInfo.appendChild(description);
        menuSectionElements.appendChild(itemInfo);

        mainCoursesCategory.appendChild(menuSectionElements);
    });

    menuContainer.appendChild(mainCoursesCategory);

    // Desserts
    const dessertsCategory = document.createElement('div');
    dessertsCategory.classList.add("menu-category");
    dessertsCategory.id = "desserts";

    const dessertsHeader = document.createElement('div');
    dessertsHeader.classList.add("menu-section-header");
    dessertsHeader.innerHTML = "Desserts";
    dessertsCategory.appendChild(dessertsHeader);

    const dessertsElements = [
        { food: "Decadent Chocolate Torte", description: "Indulgent chocolate torte with berry compote", price: "$10.99" },
        { food: "Citrus Panna Cotta", description: "Smooth panna cotta infused with refreshing citrus flavors", price: "$8.99" },
        { food: "Artisan Cheese Board", description: "Selection of fine cheeses paired with house-made preserves", price: "$14.99" }
        // Add more dessert items as needed
    ];

    dessertsElements.forEach(item => {
        const menuSectionElements = document.createElement('div');
        menuSectionElements.classList.add("menu-section-elements");

        const itemInfo = document.createElement('div');
        itemInfo.classList.add("item-info");

        const food = document.createElement('div');
        food.classList.add("food");
        food.innerHTML = `${item.food}<span class="price">${item.price}</span>`;
        
        const description = document.createElement('div');
        description.classList.add("description");
        description.innerHTML = item.description;

        itemInfo.appendChild(food);
        itemInfo.appendChild(description);
        menuSectionElements.appendChild(itemInfo);

        dessertsCategory.appendChild(menuSectionElements);
    });

    menuContainer.appendChild(dessertsCategory);

    // Beverages
    const beveragesCategory = document.createElement('div');
    beveragesCategory.classList.add("menu-category");
    beveragesCategory.id = "beverages";

    const beveragesHeader = document.createElement('div');
    beveragesHeader.classList.add("menu-section-header");
    beveragesHeader.innerHTML = "Beverages";
    beveragesCategory.appendChild(beveragesHeader);

    const beveragesElements = [
        { food: "Serenade Sunset Cocktail", description: "Tropical cocktail with a hint of serenade magic", price: "$8.99" },
        { food: "Herbal Infusion Tea", description: "A soothing blend of handpicked herbs for a delightful tea experience", price: "$5.99" },
        { food: "Serenade Bistro Special Blend Coffee", description: "Our unique coffee blend, perfect for a post-dinner treat", price: "$4.99" }
        // Add more beverage items as needed
    ];

    beveragesElements.forEach(item => {
        const menuSectionElements = document.createElement('div');
        menuSectionElements.classList.add("menu-section-elements");

        const itemInfo = document.createElement('div');
        itemInfo.classList.add("item-info");

        const food = document.createElement('div');
        food.classList.add("food");
        food.innerHTML = `${item.food}<span class="price">${item.price}</span>`;
        
        const description = document.createElement('div');
        description.classList.add("description");
        description.innerHTML = item.description;

        itemInfo.appendChild(food);
        itemInfo.appendChild(description);
        menuSectionElements.appendChild(itemInfo);

        beveragesCategory.appendChild(menuSectionElements);
    });

    menuContainer.appendChild(beveragesCategory);

    // Append menuContainer to body
    return (menuContainer);
}
