import {cart, addToCart} from '../data/cart.js';
const products = [
    {id:1,
      image:'images/product-img.jpg',
     name:'T-shirt',
    //  rating:{stars:4.5, count:4},
      rating:{stars_img:'images/ratings/page_white_stack.png', count:3},
     priceCents:1090,
    },

    {id:2,
      image:'images/product-img.jpg',
        name:'Shoes and Bag',
       //  rating:{stars:4.5, count:4},
         rating:{stars_img:'images/ratings/page_white_stack.png', count:2},
        priceCents:1090,
       },

    {id:3,
      image:'images/product-img.jpg',
        name:'Top',
        // rating:{stars:2.5, count:3},
        rating:{stars_img:'images/ratings/page_white_stack.png', count:4},
        priceCents:1080,
    },

    { id:4,
        image:'images/product-img.jpg',
        name:'Trousers',
        // rating:{stars:3.5, count:4},
        rating:{stars_img:'images/ratings/page_white_stack.png', count:3},
        priceCents:1090,
       },
   
       {id:5,
        image:'images/product-img.jpg',
           name:'Gown',
        //    rating:{stars:2.5, count:3},
        rating:{stars_img:'images/ratings/page_white_stack.png', count:5},
           priceCents:1080,
       },

       {id:6,
        image:'images/product-img.jpg',
        name:'Head Ties',
       //  rating:{stars:4.5, count:4},
         rating:{stars_img:'images/ratings/page_white_stack.png', count:4},
        priceCents:1050,
       },

       {id:7,
        image:'images/product-img.jpg',
        name:'Jacket & Shirt',
        // rating:{stars:3.5, count:4},
        rating:{stars_img:'images/ratings/page_white_stack.png', count:3},
        priceCents:1090,
       },

       {id:8,
        image:'images/product-img.jpg',
        name:'Suit',
        // rating:{stars:3.5, count:4},
        rating:{stars_img:'images/ratings/page_white_stack.png', count:3},
        priceCents:1090,
       },

       {id:9,
        image:'images/product-img.jpg',
        name:'Cap',
        // rating:{stars:3.5, count:4},
        rating:{stars_img:'images/ratings/page_white_stack.png', count:5},
        priceCents:1090,
       },

       {id:10,
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

            <button class="add-to-cart-button" data-product-id="${product.id}"
              data-product-price="${product.priceCents}" 
              >Add to Cart </button>
         </div> `
});

productsGrid.innerHTML = productsHTML;
// console.log(productsHTML);


document.querySelectorAll('.add-to-cart-button').forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;
      const productPrice = parseFloat(button.dataset.productPrice); // Convert to number
  
        addToCart(productId, productPrice);

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
  
 