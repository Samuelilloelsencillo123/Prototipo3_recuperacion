let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => {
  shoppingCart.classList.toggle('active');
  searchForm.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
  loginForm.classList.toggle('active');
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
}

window.onscroll = () => {
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".review-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },


});

   function openShoppingCart() {
    document.querySelector('.shopping-cart').style.display = 'block';
    loadProducts();
  }

  function loadProducts() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const cartContent = document.querySelector('.shopping-cart .box-container');
    cartContent.innerHTML = '';

    products.forEach(product => {
      const productBox = document.createElement('div');
      productBox.classList.add('box');
      productBox.innerHTML = `
          <i class="fas fa-trash" onclick="removeItem(this, ${product.id})"></i>
          <img src="${product.image}" alt="">
          <div class="content">
              <h3>${product.name}</h3>
              <span class="price">$${product.price}/-</span>
              <span class="quantity">qty : ${product.quantity}</span>
          </div>
      `;
      cartContent.appendChild(productBox);
    });

    const total = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
    const totalElement = document.querySelector('.shopping-cart .total');
    totalElement.textContent = `Total : $${total.toFixed(2)}/-`;
  }

  function openShoppingCart() {
    document.querySelector('.shopping-cart').style.display = 'block';
    loadProducts();
}

function addProduct() {
    const productName = document.getElementById('productName').value;
    const productPrice = parseFloat(document.getElementById('productPrice').value);
    const productQuantity = parseInt(document.getElementById('productQuantity').value);

    if (!productName || isNaN(productPrice) || isNaN(productQuantity)) {
        alert('Completa todos los campos correctamente.');
        return;
    }

    const product = {
        id: new Date().getTime(),
        name: productName,
        price: productPrice,
        quantity: productQuantity,
    };

    const products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));

    loadProducts();
}

function loadProducts() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const cartContent = document.querySelector('.shopping-cart .box-container');
    cartContent.innerHTML = '';

    products.forEach(product => {
        const productBox = document.createElement('div');
        productBox.classList.add('box');
        productBox.innerHTML = `
            <i class="fas fa-trash" onclick="removeItem(this, ${product.id})"></i>
            <div class="content">
                <h3>${product.name}</h3>
                <span class="price">$${product.price.toFixed(2)}/-</span>
                <span class="quantity">cantidad : ${product.quantity}</span>
            </div>
        `;
        cartContent.appendChild(productBox);
    });

    const total = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
    const totalElement = document.querySelector('.shopping-cart .total');
    totalElement.textContent = `Total : $${total.toFixed(2)}/-`;
}

function removeItem(element, productId) {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const updatedProducts = products.filter(product => product.id !== productId);
    localStorage.setItem('products', JSON.stringify(updatedProducts));

    loadProducts();
}


document.addEventListener('DOMContentLoaded', function () {
  const parallax = document.getElementById('parallax');

  window.addEventListener('scroll', function () {
      let offset = window.pageYOffset;
      parallax.style.backgroundPositionY = offset * 0.7 + 'px';
  });
});

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);