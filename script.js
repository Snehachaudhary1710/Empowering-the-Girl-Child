const slides = document.querySelectorAll(".slide");
let index = 0;

function changeSlide() {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
    index = (index + 1) % slides.length;
}

setInterval(changeSlide, 2000); // Change every 2 seconds

function learnMore() {
    alert("Thank you for supporting the movement!");
}

document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    let index = 0;

    function changeSlide() {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (i === index) {
                slide.classList.add("active");
            }
        });
        index = (index + 1) % slides.length;
    }

    // Initial setup to ensure first slide is visible
    slides[0].classList.add("active");

    setInterval(changeSlide, 2000); // Change every 2 seconds
});
