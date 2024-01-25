import { cart, addToCart } from "../data/cart.js";
import { electronicProducts } from "../data/electronicProducts.js";
// import { furnitureProducts as products } from "../data/furnitureProducts.js";

let electronicProductsHtml = "";

electronicProducts.forEach((electronicProduct) => {
  electronicProductsHtml += `<div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${electronicProduct.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${electronicProduct.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${electronicProduct.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${electronicProduct.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${electronicProduct.priceCents}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart"
          data-product-id = "${electronicProduct.id}">
            Add to Cart
          </button>
        </div>`;
});

// console.log(productsHtml);

function updateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
  console.log(cartQuantity);
}

document.querySelector(".js-products-grid").innerHTML = electronicProductsHtml;

document.querySelectorAll(".js-add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    console.log("Added to cart");
    const productId = button.dataset.electronicProductId;
    addToCart(electronicProductId);
    updateCartQuantity();

    console.log(cart);
  });
});

const nav = document.querySelector(".nav-links");
const menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
});
