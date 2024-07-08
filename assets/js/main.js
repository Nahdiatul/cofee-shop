// Sticky Navbar
const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 100) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
});
  // slider 
  let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slider-img");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}
