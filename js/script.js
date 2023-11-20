searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
  loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
  loginForm.classList.remove('active');
}

window.onscroll = () =>{

  searchForm.classList.remove('active');

  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

}

window.onload = () =>{

  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

  fadeOut();

}


function loader(){
  document.querySelector('.loader-container').classList.add('active');
}

function fadeOut(){
  setTimeout(loader, 1500);
}

// script.js
function flipBook(cover) {
  const description = cover.nextElementSibling;

  // Toggle flip state (you may need to adjust the rotation values)
  if (cover.style.transform === 'rotateY(180deg)') {
      cover.style.transform = 'rotateY(0deg)';
      description.style.display = 'none';
  } else {
      cover.style.transform = 'rotateY(180deg)';
      description.style.display = 'block';
  }

  // Add an event listener to close the book description when clicked again
  cover.addEventListener('click', function(event) {
      if (event.target === cover) {
          cover.style.transform = 'rotateY(0deg)';
          description.style.display = 'none';
      }
  });
}







function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}


var swiper = new Swiper(".books-slider", {
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".featured-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".arrivals-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});



var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});




// Function to add items to the cart
function addToCart(book) {
  // Retrieve existing cart items from local storage
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  // Add the selected book to the cart
  cartItems.push(book);

  // Save the updated cart items to local storage
  localStorage.setItem('cart', JSON.stringify(cartItems));
}

// Function to show the cart modal
function showCart() {
  document.getElementById('cartModal').style.display = 'block';
  displayCartItems();
}

// Function to hide the cart modal
function hideCart() {
  document.getElementById('cartModal').style.display = 'none';
}

// Function to display cart items
function displayCartItems() {
  // Retrieve cart items from local storage
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  // Display cart items in the modal
  let cartList = document.getElementById('cartItems');
  cartList.innerHTML = '';

  cartItems.forEach(item => {
      let listItem = document.createElement('li');
      listItem.textContent = item;
      cartList.appendChild(listItem);
  });
}

// Display cart items when the page loads
displayCartItems();




