$(document).ready(function () {
    const slides = $('.slides');
    const totalSlides = $('.slide').length;
    
    // Set the width of the slides container dynamically
    slides.css('width', totalSlides * 100 + '%');
    
    // No additional JS is required for the sliding and repeat behavior
});
