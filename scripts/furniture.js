import { cart, addToCart4 } from "../data/cart.js";
import { furnitureProducts } from "../data/furnitureProducts.js";
let furnitureProductsHtml = "";

furnitureProducts.forEach((furnitureProduct) => {
  furnitureProductsHtml += `<div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${furnitureProduct.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${furnitureProduct.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${
                furnitureProduct.rating.stars * 10
              }.png">
            <div class="product-rating-count link-primary">
              ${furnitureProduct.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${furnitureProduct.priceCents}
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
          data-product-id = "${furnitureProduct.id}">
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
  // console.log(cart);
}

document.querySelector(".js-products-grid").innerHTML = furnitureProductsHtml;

document.querySelectorAll(".js-add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    console.log("Added to cart");
    const furnitureProductId = button.dataset.furnitureProductId;
    addToCart4(furnitureProductId);
    updateCartQuantity();

    console.log(cart);
  });
});
