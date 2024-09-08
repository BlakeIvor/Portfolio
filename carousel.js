document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.project-slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentSlide = 0;

    function updateSlide(newSlideIndex) {
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            if (index === newSlideIndex) {
                slide.classList.add('active');
            }
        });

        // Disable prev/next buttons at start/end
        prevBtn.disabled = newSlideIndex === 0;
        nextBtn.disabled = newSlideIndex === slides.length - 1;
    }

    prevBtn.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlide(currentSlide);
            
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentSlide < slides.length - 1) {
            currentSlide++;
            updateSlide(currentSlide);
        }
    });

    // Initialize the carousel
    updateSlide(currentSlide);
});
