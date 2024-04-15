const slides = document.querySelectorAll(".filter-container--common");
    let currentSlide = 0;
    showSlide(currentSlide);

    setInterval(function() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 2000);

    function showSlide(index) {
        slides.forEach(function(slide) {
            slide.style.display = "none";
        });

        slides[index].style.display = "block";
    }
