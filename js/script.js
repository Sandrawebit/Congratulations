// Slider img
const sliderArrow = document.querySelector('.slider-arrow');
        slidesArrow = document.querySelectorAll('.slider-arrow__item');
        prev = sliderArrow.querySelector('.slider-arrow--left');
        next = sliderArrow.querySelector('.slider-arrow--right');

        let slideIndex = 0;

        prev.addEventListener('click', () => showSlideArrow(-1));
        next.addEventListener('click', () => showSlideArrow(1));

        function showSlideArrow(n) {
            slideIndex += n;

            if (slideIndex < 0) slideIndex = slidesArrow.length - 1;
            if (slideIndex >= slidesArrow.length) slideIndex = 0;

        slidesArrow.forEach(item => item.style.display = 'none');
        slidesArrow[slideIndex].style.display = 'block';
    }

    showSlideArrow(0);

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("footer").classList.toggle("open")
    })   
})