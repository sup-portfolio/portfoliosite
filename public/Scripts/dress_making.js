document.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelectorAll("[data-project]");
    const modal = document.getElementById("projectModal");
    const closeModal = document.getElementById("closeModal");
    const carousel = document.querySelector(".carousel-images");
    const prevSlide = document.getElementById("prevSlide");
    const nextSlide = document.getElementById("nextSlide");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");

    const projectData = {
        draping1: {
            title: "Draping with Elegance",
            description: `Showcasing precise sewing techniques.`,
            images: [
                "https://placehold.co/600x400/FF6F61/FFFFFF?text=Draping+1a",
                "https://placehold.co/600x400/FF6F61/FFFFFF?text=Draping+1b",
            ],
        },
        draping2: {
            title: "Draping with Elegance",
            description: `Showcasing precise sewing techniques.`,
            images: [
                "https://placehold.co/600x400/FF6F61/FFFFFF?text=Draping+1a",
                "https://placehold.co/600x400/FF6F61/FFFFFF?text=Draping+1b",
            ],
        },
        sewing1: {
            title: "Precision in Stitching",
            description: "Showcasing precise sewing techniques.",
            images: [
                "https://placehold.co/600x400/2196F3/FFFFFF?text=Sewing+1a",
                "https://placehold.co/600x400/2196F3/FFFFFF?text=Sewing+1b",
            ],
        },
        final1: {
            title: "A Journey in Design",
            description: "The culmination of design learnings in a graduation project.",
            images: [
                "https://placehold.co/600x400/FFC107/FFFFFF?text=Final+1a",
                "https://placehold.co/600x400/FFC107/FFFFFF?text=Final+1b",
            ],
        },
    };

    let currentSlide = 0;
    let autoplay;

    // Open Modal
    projects.forEach((project) => {
        project.addEventListener("click", () => {
            const projectId = project.getAttribute("data-project");
            const data = projectData[projectId];
            if (!data) return;

            modalTitle.textContent = data.title;
            modalDescription.textContent = data.description;

            // Populate Carousel
            carousel.innerHTML = data.images
                .map((img) => `<img src="${img}" class="w-full h-auto object-contain">`)
                .join("");

            currentSlide = 0;
            moveToSlide(0);
            modal.classList.remove("hidden");
            startAutoplay();
        });
    });

    // Close Modal
    closeModal.addEventListener("click", () => {
        modal.classList.add("hidden");
        stopAutoplay();
    });

    // Navigation Buttons
    prevSlide.addEventListener("click", () => {
        stopAutoplay();
        moveToSlide(currentSlide - 1);
    });

    nextSlide.addEventListener("click", () => {
        stopAutoplay();
        moveToSlide(currentSlide + 1);
    });

    // Move to Slide
    function moveToSlide(index) {
        currentSlide = (index + carousel.children.length) % carousel.children.length;
        const offset = -currentSlide * 100;
        carousel.style.transform = `translateX(${offset}%)`;
        carousel.style.transition = "transform 0.5s ease-in-out";
    }

    // Autoplay Function
    function startAutoplay() {
        autoplay = setInterval(() => moveToSlide(currentSlide + 1), 3000);
    }

    function stopAutoplay() {
        clearInterval(autoplay);
    }
});
