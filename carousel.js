document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.project-slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentSlide = parseInt(localStorage.getItem('currentSlide')) || 0;

    function loadUnityProject(slideIndex) {
        
        let currentProj = 0
        if(slideIndex === 0){
            currentProj = "TurtleTakeover";
        }else if(slideIndex === 1){
            currentProj = "Bellicose";
        }else{
            console.log(slideIndex);
        }



        const unityContainers = document.querySelectorAll('.unity-container');
        unityContainers.forEach((container, index) => {
            if (index === slideIndex) {
                container.innerHTML = `<iframe src="${currentProj}/index.html" width="1000" height="1000" scrolling="no" frameborder="0"></iframe>`;
            } else {
                container.innerHTML = '';
            }
        });
    }

    function updateSlide(newSlideIndex) {
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            if (index === newSlideIndex) {
                slide.classList.add('active');
            }
        });

        // Disable prev/next buttons at start/end
        nextBtn.disabled = newSlideIndex === slides.length - 1;

        // Save the current slide index
        localStorage.setItem('currentSlide', newSlideIndex);

        // Load the appropriate Unity project
        loadUnityProject(newSlideIndex);
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
