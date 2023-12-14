let cartItems = [];

function addToCart(productId) {
    const product = document.querySelector(`.product[data-id="${productId}"]`);
    const productName = product.querySelector('h2').innerText;
    const productPrice = parseFloat(product.querySelector('p').innerText.slice(1));

    cartItems.push({
        id: productId,
        name: productName,
        price: productPrice,
    });

    updateCart();
}

function updateCart() {
    const cartCount = document.getElementById('cart-count');
    const cartModalItems = document.getElementById('cart-items');

    cartCount.innerText = cartItems.length;

    while (cartModalItems.firstChild) {
        cartModalItems.removeChild(cartModalItems.firstChild);
    }

    cartItems.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerText = `${item.name} - $${item.price.toFixed(2)}`;
        cartModalItems.appendChild(cartItem);
    });
}

function openCart() {
    document.getElementById('cart-modal').style.display = 'flex';
}

function closeCart() {
    document.getElementById('cart-modal').style.display = 'none';
}

function checkout() {
    // Add logic for payment and order processing
    alert('Checkout logic goes here!');
    // After successful payment, you may want to clear the cart
    cartItems = [];
    updateCart();
    closeCart();
}
