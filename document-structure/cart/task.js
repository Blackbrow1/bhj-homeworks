document.addEventListener('DOMContentLoaded', function() {
  const cartProducts = document.querySelector('.cart__products');
  
  const cart = {};
  
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('product__quantity-control_inc')) {
      const quantityValue = e.target.parentElement.querySelector('.product__quantity-value');
      let quantity = parseInt(quantityValue.textContent);
      quantity++;
      quantityValue.textContent = quantity;
    }
    
    if (e.target.classList.contains('product__quantity-control_dec')) {
      const quantityValue = e.target.parentElement.querySelector('.product__quantity-value');
      let quantity = parseInt(quantityValue.textContent);
      if (quantity > 1) {
        quantity--;
        quantityValue.textContent = quantity;
      }
    }
    
    if (e.target.classList.contains('product__add')) {
      const product = e.target.closest('.product');
      const productId = product.dataset.id;
      const productImage = product.querySelector('.product__image').src;
      const quantity = parseInt(product.querySelector('.product__quantity-value').textContent);
      
      addToCart(productId, productImage, quantity);
    }
  });
  
  function addToCart(id, imageSrc, quantity) {
    const existingCartItem = cartProducts.querySelector(`.cart__product[data-id="${id}"]`);
    
    if (existingCartItem) {
      const countElement = existingCartItem.querySelector('.cart__product-count');
      let currentCount = parseInt(countElement.textContent);
      currentCount += quantity;
      countElement.textContent = currentCount;
      
      existingCartItem.style.transform = 'scale(1.1)';
      setTimeout(() => {
        existingCartItem.style.transform = 'scale(1)';
      }, 200);
    } else {
      const cartProduct = document.createElement('div');
      cartProduct.className = 'cart__product';
      cartProduct.dataset.id = id;
      
      const cartProductImage = document.createElement('img');
      cartProductImage.className = 'cart__product-image';
      cartProductImage.src = imageSrc;
      
      const cartProductCount = document.createElement('div');
      cartProductCount.className = 'cart__product-count';
      cartProductCount.textContent = quantity;
      
      cartProduct.appendChild(cartProductImage);
      cartProduct.appendChild(cartProductCount);
      cartProducts.appendChild(cartProduct);
      
      cartProduct.style.opacity = '0';
      cartProduct.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        cartProduct.style.transition = 'all 0.3s ease';
        cartProduct.style.opacity = '1';
        cartProduct.style.transform = 'translateY(0)';
      }, 10);
    }
    
    if (!cart[id]) {
      cart[id] = { quantity: quantity, image: imageSrc };
    } else {
      cart[id].quantity += quantity;
    }
  }
  
  cartProducts.addEventListener('click', function(e) {
    if (e.target.closest('.cart__product')) {
      const cartItem = e.target.closest('.cart__product');
      const productId = cartItem.dataset.id;
      
      cartItem.style.transform = 'translateX(100%)';
      cartItem.style.opacity = '0';
      
      setTimeout(() => {
        cartItem.remove();
        delete cart[productId];
      }, 300);
    }
  });
  
  document.addEventListener('keydown', function(e) {
    const activeElement = document.activeElement;
    
    if (e.key === '+' || e.key === '=') {
      const incButton = activeElement.closest('.product')?.querySelector('.product__quantity-control_inc');
      if (incButton) {
        e.preventDefault();
        incButton.click();
      }
    }
    
    if (e.key === 'Enter' && activeElement.classList.contains('product__add')) {
      e.preventDefault();
      activeElement.click();
    }
  });
});