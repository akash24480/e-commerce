export let cart = JSON.parse(localStorage.getItem("cart"));
if (!cart) {
  cart = [
    {
      productId: "903f80df-c738-444a-8ea8-238506f20db4",
      quantity: 1,
    },
  ];
}

function saveToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(productId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
    });
  }

  saveToStorage();
}
export function addToCart2(womenProductId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (womenProductId === cartItem.womenProductId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      womenProductId: womenProductId,
      quantity: 1,
    });
  }
}

export function addToCart3(kidsProductId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (kidsProductId === cartItem.kidsProductId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      kidsProductId: kidsProductId,
      quantity: 1,
    });
  }
}

export function addToCart4(furnitureProductId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (furnitureProductId === cartItem.furnitureProductId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      furnitureProductId: furnitureProductId,
      quantity: 1,
    });
  }
}

export function addToCart5(electronicProductId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (electronicProductId === cartItem.electronicProductId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      electronicProductId: electronicProductId,
      quantity: 1,
    });
  }
}

// Remove product from the Cart

export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });
  cart = newCart;
  saveToStorage();
}
