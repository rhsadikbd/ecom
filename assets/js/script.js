//   ===== Feature Product Slider
$(".feature-carousel").owlCarousel({
  loop: true,
  margin: 20,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  navText: [
    '<i class="fa-solid fa-angle-left"></i>',
    '<i class="fa-solid fa-angle-right"></i>',
  ],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    768: {
      items: 2,
      nav: true,
    },
    992: {
      items: 3,
      nav: true,
    },
    1200: {
      items: 3,
      nav: true,
    },
    1400: {
      items: 4,
      nav: true,
    },
  },
});
//   ===== Feature Product Slider End

//   ===== Latest Cattle Slider
$(".latest-cattle-carousel").owlCarousel({
  loop: true,
  navText: [
    '<i class="fa-solid fa-angle-left"></i>',
    '<i class="fa-solid fa-angle-right"></i>',
  ],
  margin: 20,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    768: {
      items: 2,
      nav: true,
    },
    992: {
      items: 3,
      nav: true,
    },
  },
});
//   ===== Feature Product Slider End

// ===== Testimonial Slider

$(".testimonial-carousel").owlCarousel({
  loop: true,
  navText: [
    '<i class="fa-solid fa-angle-left"></i>',
    '<i class="fa-solid fa-angle-right"></i>',
  ],
  margin: 20,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    768: {
      items: 2,
      nav: true,
    },
    992: {
      items: 3,
      nav: true,
    },
    1200: {
      items: 4,
      nav: true,
    },
  },
});
// ----- Testimonial Slider End

// ----- Sticky Navbar
window.addEventListener("scroll", function () {
  const element = document.querySelector(".mian_nav");
  if (window.scrollY > 300) {
    element.classList.add("fixed-nav");
  } else {
    element.classList.remove("fixed-nav");
  }
});

// ----- Mobile Menu Drawer
const mobileMenuIcon = document.querySelector(".mobile_menu");
const mobileMenu = document.querySelector(".mobile_menu_door");
const mobileMenuClose = document.querySelector(".close_icon");

mobileMenuIcon.addEventListener("click", function () {
  mobileMenu.classList.add("active");
});
mobileMenuClose.addEventListener("click", function () {
  mobileMenu.classList.remove("active");
});

// ----- Mobile Menu Drawer End

// ----- Details Images
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("my_slides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}



