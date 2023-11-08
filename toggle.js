$(document).ready(function() {
    $("#mobile-menu").click(function() {
        $("#nav-links").slideToggle(); // Toggle the visibility of the navigation links
        $(this).toggleClass("menu-open"); // Apply class for the close icon animation
    });
});

// document.addEventListener("DOMContentLoaded", function() {
//     var currentSlide = 0;
//     var slides = document.querySelectorAll(".slider");

//     function showSlide(index) {
//         slides.forEach(function(slide) {
//             slide.style.display = "none";
//         });

//         slides[index].style.display = "block";
//     }

//     function nextSlide() {
//         currentSlide = (currentSlide + 1) % slides.length;
//         showSlide(currentSlide);
//     }

//     function prevSlide() {
//         currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//         showSlide(currentSlide);
//     }

//     document.querySelector(".prev-btn").addEventListener("click", prevSlide);
//     document.querySelector(".next-btn").addEventListener("click", nextSlide);

//     // Initial display of the first slide
//     showSlide(currentSlide);
// });

