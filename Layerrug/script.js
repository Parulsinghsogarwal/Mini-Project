// JavaScript for image slider
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const slideInterval = setInterval(nextSlide, 3000); // Change image every 3 seconds

function nextSlide() {
  slides[slideIndex].style.opacity = 0;
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].style.opacity = 1;
}
function filterProducts(category) {
    const products = document.querySelectorAll('.product');
  
    products.forEach(product => {
      const productCategory = product.dataset.category;
  
      if (category === 'all' || productCategory === category) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  }
  