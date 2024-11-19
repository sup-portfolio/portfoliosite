document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".carousel-slide > div");
    const dots = document.querySelectorAll(".carousel-dot");
    let currentIndex = 0;

    function showSlide(index) {
        const totalSlides = slides.length;
        const offset = -index * 100; // Move the carousel
        slides[0].parentElement.style.transform = `translateX(${offset}%)`;

        // Update dots
        dots.forEach(dot => dot.classList.remove("opacity-100"));
        dots[index].classList.add("opacity-100");
    }

    // Auto-slide every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }, 3000);

    // Add dot click functionality
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });

    // Initialize first slide
    showSlide(0);
});
