const lblName = document.getElementById("product-camera-lbl-name");
const btnAddToCart = document.getElementById("product-camera-btn-add-to-cart");
const lblPrice = document.getElementById("product-camera-lbl-price");
const lblPrompter = document.getElementById("product-camera-lbl-prompter");

const productPrice = parseFloat(
  lblPrice.textContent.replace(/[^\d.-]/g, "").replace(/\s/g, "")
);
const productName = lblName.textContent;

btnAddToCart.addEventListener("click", async () => {
  const item = {
    product: productName,
    quantity: 1,
    price: productPrice
  };
  addToCart(item);

  const price = lblPrice.textContent;

  lblPrice.textContent = "Added camera to cart.";
  btnAddToCart.classList.add("disabled");
  btnAddToCart.classList.replace("btn-primary", "btn-success");
  btnAddToCart.setAttribute("disabled", "");
  await wait(1000);
  btnAddToCart.removeAttribute("disabled", "");
  btnAddToCart.classList.replace("btn-success", "btn-primary");
  btnAddToCart.classList.remove("disabled");

  lblPrice.textContent = price;
  // window.location.href = 'cart.html';
});
