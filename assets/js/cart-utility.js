function addToCart(item) {
    let cart = loadCart();
    console.log(item);
    if (
      cart.some(function (cartItem) {
        if (cartItem.product === item.product) {
          cartItem.quantity++;
          return true;
        } else return false;
      })
    )
      return localStorage.setItem('cart', JSON.stringify(cart));
  
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  function loadCart() {
    let cart = localStorage.getItem('cart');
    if (!cart) {
      localStorage.setItem('cart', JSON.stringify([]));
      cart = [];
    } else {
      cart = JSON.parse(cart);
    }
    return cart;
  }
  
  async function wait(milliseconds) {
    await new Promise((resolve) => {
      setTimeout(resolve, milliseconds);
    });
  }
  