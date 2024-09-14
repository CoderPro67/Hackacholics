document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelector('.slides');
    const slideImages = document.querySelectorAll('.slide');
    const totalSlides = slideImages.length;
    let currentIndex = 0;
  
    const showSlide = (index) => {
      if (index >= totalSlides) currentIndex = 0;
      else if (index < 0) currentIndex = totalSlides - 1;
      else currentIndex = index;
  
      const offset = -currentIndex * 100;
      slides.style.transform = `translateX(${offset}%)`;
    };
  
    document.querySelector('.next').addEventListener('click', () => {
      showSlide(currentIndex + 1);
    });
  
    document.querySelector('.prev').addEventListener('click', () => {
      showSlide(currentIndex - 1);
    });
  
    // Show the first slide initially
    showSlide(0);
  });
  