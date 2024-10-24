const slider = document.querySelector(".header-slider");
let isDown = false;
let startX;
let scrollLeft;
let scrollForce = 1.5;

slider.addEventListener("mousedown", (event) => {
    isDown = true;
    startX = event.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
    isDown = false;
});

slider.addEventListener("mouseup", () => {
    isDown = false;
});

slider.addEventListener("mousemove", (event) => {
    if(!isDown) return;
    const x = event.pageX - slider.offsetLeft;
    const walk = (x - startX) * scrollForce;
    slider.scrollLeft = scrollLeft - walk;
    event.preventDefault();
});