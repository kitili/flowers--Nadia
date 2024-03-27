$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    autoplay: true,
    margin: 30,
    loop: true,
    dots: true,
    nav: true,
    navText: ["<i class='fas fa-long-arrow-alt-left'></i>", "<i class='fas fa-long-arrow-alt-right'></i>"],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // Smooth Scrolling
  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // ... (existing code for smooth scrolling) ...
    });

  // Add to Cart
  $(".btn").click(function() {
    alert("Item added to cart!");
  });

  // Wishlist
  $(".wishlist").click(function() {
    alert("Item added to wishlist!");
  });

  // Share
  $(".share").click(function() {
    alert("Share link copied to clipboard!");
  });

  // Contact Form
  $('form').submit(function(event) {
    event.preventDefault();
    alert("Thank you for your message! We'll get back to you shortly.");
    $('form').trigger('reset');
  });
});