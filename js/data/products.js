
const products = [
    {image:'images/product-img.jpg',
     name:'T-shirt',
    //  rating:{stars:4.5, count:4},
      rating:{stars_img:'images/ratings/page_white_stack.png', count:3},
     priceCents:1090,
    },

    {image:'images/product-img.jpg',
        name:'Shoes and Bag',
       //  rating:{stars:4.5, count:4},
         rating:{stars_img:'images/ratings/page_white_stack.png', count:2},
        priceCents:1090,
       },

    {image:'images/product-img.jpg',
        name:'Top',
        // rating:{stars:2.5, count:3},
        rating:{stars_img:'images/ratings/page_white_stack.png', count:4},
        priceCents:1080,
    },

    {
        image:'images/product-img.jpg',
        name:'Trousers',
        // rating:{stars:3.5, count:4},
        rating:{stars_img:'images/ratings/page_white_stack.png', count:3},
        priceCents:1090,
       },
   
       {image:'images/product-img.jpg',
           name:'Gown',
        //    rating:{stars:2.5, count:3},
        rating:{stars_img:'images/ratings/page_white_stack.png', count:5},
           priceCents:1080,
       },

       {
        image:'images/product-img.jpg',
        name:'Head Ties',
       //  rating:{stars:4.5, count:4},
         rating:{stars_img:'images/ratings/page_white_stack.png', count:4},
        priceCents:1050,
       },

       {
        image:'images/product-img.jpg',
        name:'Jacket & Shirt',
        // rating:{stars:3.5, count:4},
        rating:{stars_img:'images/ratings/page_white_stack.png', count:3},
        priceCents:1090,
       },

       {
        image:'images/product-img.jpg',
        name:'Suit',
        // rating:{stars:3.5, count:4},
        rating:{stars_img:'images/ratings/page_white_stack.png', count:3},
        priceCents:1090,
       },

       {
        image:'images/product-img.jpg',
        name:'Cap',
        // rating:{stars:3.5, count:4},
        rating:{stars_img:'images/ratings/page_white_stack.png', count:5},
        priceCents:1090,
       },

       {
        image:'images/product-img.jpg',
        name:'Heart',
        // rating:{stars:3.5, count:4},
        rating:{stars_img:'images/ratings/page_white_stack.png', count:4},
        priceCents:1090,
       },
];

// to combine all the products together and render in our page

// we declear variable

let productsHTML = '';
let productsGrid = document.querySelector('.product-grid');
/* <img src="${product.rating.stars*10}.png" alt="" class="product-rating-star"> */

products.forEach((product)=>{
  productsHTML +=` <div class="product-container">
            <div class="product-image-container">
                <img src="${product.image}" alt="" class="product-image">
            </div>

            <div class="product_details">
            <div class="product-name">
                <p>${product.name}</p>
            </div>

            <div class="product-rating-container">
                <img src="${product.rating.stars_img}" alt="" class="product-rating-star">
                <div class="product-rating-count">${product.rating.count}</div>
            </div>

             <div class="product-price-container">
                $${(product.priceCents/100).toFixed(2)}
            </div>

            <div class="product-qty-container">
                <input type="number" name="product-qty" id="product-qty" class="product-qty">
            </div>
             <div class="add-to-cart-msg">
            
            </div>

            </div>

            <button class="add-to-cart-button" data-product-name="${product.name}"
              data-product-price="${product.priceCents}" 
              >Add to Cart </button>
         </div> `
});

productsGrid.innerHTML = productsHTML;
console.log(productsHTML);

document.querySelectorAll('.add-to-cart-button').forEach((button) => {
    button.addEventListener('click', () => {
      const productName = button.dataset.productName;
      const productPrice = parseFloat(button.dataset.productPrice); // Convert to number
  
      let matchingItem;
  
      // Check if product already exists in cart
      cart.forEach((item) => {
        if (item.productName === productName) {
          matchingItem = item;
        }
      });
  
      // Increase quantity if product exists, else add new item
      if (matchingItem) {
        matchingItem.quantity += 1;
      } else {
        cart.push({
          productName: productName,
          quantity: 1,
          productPrice: productPrice,
        });
      }
  
      // Update cart display
      let productMsg = document.querySelector('.product-message');
  
      // Format the cart items as HTML
      let cartHTML = cart.map(item => {
        return `<p class='product-table'>Product Name: ${item.productName} | Qty: ${item.quantity} | Price: $${(item.productPrice * item.quantity).toFixed(2)}</p>`;
      }).join('');
  
      // Display cart
      productMsg.innerHTML = `
        <h3>Cart Items</h3> <hr>
        <div>${cartHTML}</div>`;

        // getting the total cart quantity
        let cartQuantity = 0;
    cart.forEach((item)=>{
      cartQuantity += item.quantity;
      // console.log(`Total Qty: ${cartQuantity}`);
      // console.log(cart);
    });
  
     document.querySelector('.cart-count').innerText = cartQuantity;
    });
    
  });
  
 