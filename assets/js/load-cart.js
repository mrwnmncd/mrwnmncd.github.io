// checkout-lbl-subtotal
// checkout-lbl-discount
// checkout-lbl-total

(() => {
  // const btnCheckout = document.getElementById("checkout-btn-checkout");
  const modalPayment = document.getElementById("checkout-modal-payment");

  const modalLblTotal = document.getElementById("checkout-modal-lbl-total");
  const modalBtnPlaceOrder = document.getElementById(
    "checkout-modal-btn-place-order"
  );

  const btnClearCart = document.getElementById("cart-btn-clear-cart");
  const tblCart = document.getElementById("cart-table");

  const lblSubtotal = document.getElementById("checkout-lbl-subtotal");
  const lblDiscount = document.getElementById("checkout-lbl-discount");
  const lblTotal = document.getElementById("checkout-lbl-total");
  const prompter = document.getElementById("cart-lbl-prompter");

  const cartChart = document.getElementById("cart-enumerations");

  let subtotal = 0;
  let discount = 0;
  let total = 0;

  const cart = loadCart();

  btnClearCart.addEventListener("click", () => {
    localStorage.setItem("cart", JSON.stringify([]));
    window.location.reload();
  });

  if (cart.length === 0) {
    prompter.textContent = "Your cart is empty, browse around!";
    tblCart.style.display = "none";
  } else {
    prompter.style.display = "none";
    tblCart.style.display = "block";
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

  modalLblTotal.textContent = "₱ " + total;

  modalBtnPlaceOrder.addEventListener("click", () => {
    const message =
      "Thank you! The demonstration ends here. \n\n" +
      "Would you like to be redirected to the GitHub repository of this website? \n" +
      "Please click OK to confirm.";
    if (confirm(message)) {
      window.location.href = "https://github.com/mrwnmncd/wdp-polaroid-love";
    } else {
      alert("Thank you for your time! You will be redirected to the homepage.");
      window.location.href = "/";
    }
  });
})();
