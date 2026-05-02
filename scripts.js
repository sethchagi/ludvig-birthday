// Slide navigation functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Function to display the current slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

// Function to move to the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Function to move to the previous slide
function previousSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Keyboard controls
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        nextSlide();
    } else if (event.key === 'ArrowLeft') {
        previousSlide();
    }
});

// Music functionality
const music = new Audio('path/to/music.mp3'); // Update with the path to your music file
let isPlaying = false;

function toggleMusic() {
    if (isPlaying) {
        music.pause();
    } else {
        music.play();
    }
    isPlaying = !isPlaying;
}

// Optional: Add controls to toggle music functionality
document.getElementById('musicToggle').addEventListener('click', toggleMusic);

// Initial call to display the first slide
showSlide(currentSlide);