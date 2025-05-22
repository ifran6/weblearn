export const cart = [];

export function addToCart(productId, productPrice){
  
    let matchingItem;
    
    // Check if product already exists in cart
    cart.forEach((item) => {
      if (item.productId === productId) {
        matchingItem = item;
      }
    });
  
    // Increase quantity if product exists, else add new item
    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      cart.push({
        productId: productId,
        quantity: 1,
        productPrice: productPrice,
      });
    }
  
    // Update cart display
    let productMsg = document.querySelector('.product-message');
  
    // Format the cart items as HTML
    let cartHTML = cart.map(item => {
      return `<p class='product-table'>Product ID: ${item.productId} | Qty: ${item.quantity} | Price: $${(item.productPrice * item.quantity).toFixed(2)}</p>`;
    }).join('');
  
    // Display cart
    productMsg.innerHTML = `
      <h3>Cart Items</h3> <hr>
      <div>${cartHTML}</div>`;
  }