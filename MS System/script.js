let cart = [];

document.getElementById("home").addEventListener("click", () => showSection("home-section"));
document.getElementById("contact").addEventListener("click", () => showSection("contact-section"));
document.getElementById("about").addEventListener("click", () => showSection("about-section"));
document.getElementById("shop").addEventListener("click", () => showSection("shop-section"));

function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => section.style.display = "none");

    // Show the clicked section
    document.getElementById(sectionId).style.display = "block";
}

function confirmPurchase() {
    // Get all checked products
    const checkboxes = document.querySelectorAll('.product input[type="checkbox"]:checked');
    
    if (checkboxes.length === 0) {
        alert("Please select at least one product before confirming your purchase.");
        return;
    }

    // Clear the cart before adding selected products
    cart = [];

    checkboxes.forEach(checkbox => {
        const productName = checkbox.getAttribute('data-name');
        const productPrice = parseFloat(checkbox.getAttribute('data-price'));

        // Add the product to the cart
        cart.push({ productName, productPrice });
    });

    // Hide the product list
    document.querySelector('.product-list').style.display = 'none';
    
    // Show confirmation message
    const confirmationMessage = document.getElementById('confirmation-message');
    confirmationMessage.style.display = 'block';
    
    // Populate the purchased items list
    const purchasedItemsList = document.getElementById('purchased-items-list');
    purchasedItemsList.innerHTML = ''; // Clear any previous items

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.productName} - $${item.productPrice.toFixed(2)}`;
        purchasedItemsList.appendChild(li);
    });
}

function resetCart() {
    // Reset cart
    cart = [];

    // Hide confirmation message
    document.getElementById('confirmation-message').style.display = 'none';

    // Show product list again
    document.querySelector('.product-list').style.display = 'grid';
}
