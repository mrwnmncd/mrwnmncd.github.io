// checkout-lbl-subtotal
// checkout-lbl-discount
// checkout-lbl-total

(() => {
  const lblSubtotal = document.getElementById("checkout-lbl-subtotal");
  const lblDiscount = document.getElementById("checkout-lbl-discount");
  const lblTotal = document.getElementById("checkout-lbl-total");
  const prompter = document.getElementById("cart-lbl-prompter");

  const cartChart = document.getElementById("cart-enumerations");

  let subtotal = 0;
  let discount = 0;
  let total = 0;

  const cart = loadCart();

  if (cart.length === 0) {
    prompter.textContent = "Your cart is empty, browse around!";
  } else {
    prompter.style.display = "none";
    cart.forEach((cartItem) => {
      const cartItemElement = document.createElement("tr");
      const cartItemProductElement = document.createElement("td");
      const cartItemQuantityElement = document.createElement("td");
      const cartItemPriceElement = document.createElement("td");

      const productItem = cartItem.product;
      const productPrice = cartItem.price;
      const productQuantity = cartItem.quantity;

      subtotal += productPrice * productQuantity;

      cartItemProductElement.textContent = productItem;
      cartItemQuantityElement.textContent = productQuantity;
      cartItemPriceElement.textContent = "₱ " + productPrice * productQuantity;

      cartItemElement.appendChild(cartItemProductElement);
      cartItemElement.appendChild(cartItemQuantityElement);
      cartItemElement.appendChild(cartItemPriceElement);
      cartChart.appendChild(cartItemElement);
    });
  }

  total = subtotal - discount;

  lblSubtotal.textContent = subtotal;
  lblDiscount.textContent = discount;
  lblTotal.textContent = total;
})();
