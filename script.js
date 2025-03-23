document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    let index = 0;

    if (slides.length === 0) {
        console.error("No slides found!");
        return;
    }

    function changeSlide() {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
        });

        slides[index].classList.add("active");
        index = (index + 1) % slides.length;
    }

    // Ensure first slide is visible initially
    slides[0].classList.add("active");

    // Start the slideshow
    setInterval(changeSlide, 3000); // Change every 3 seconds
});

function learnMore() {
    alert("Thank you for supporting the movement!");
}
