let slideIndices = {
    sectionals: 1,
    nationals: 1
};

// Initialize the slideshows
showSlides(1, 'sectionals');
showSlides(1, 'nationals');

// Next/previous controls
function plusSlides(n, slideshow) {
    showSlides(slideIndices[slideshow] += n, slideshow);
}

// Thumbnail image controls
function currentSlide(n, slideshow) {
    showSlides(slideIndices[slideshow] = n, slideshow);
}

function showSlides(n, slideshow) {
    let i;
    let slides = document.getElementsByClassName(slideshow);
    if (n > slides.length) {slideIndices[slideshow] = 1}
    if (n < 1) {slideIndices[slideshow] = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndices[slideshow] - 1].style.display = "block";
}
