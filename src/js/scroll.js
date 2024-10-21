const menuScroll = document.querySelectorAll('.menu-link')

menuScroll.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href'); 
    const targetSection = document.querySelector(targetId); 
    
    targetSection.scrollIntoView({
      behavior: 'smooth', 
      block: 'start'      
    });
  });
});


const scrollTopBtn = document.getElementById('scrollTopBtn');

window.onscroll = function () {
  scrollFunction();
};

// Показуємо кнопку, якщо сторінка прокручена більше ніж на 60px
function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    scrollTopBtn.style.display = 'flex';
  } else {
    scrollTopBtn.style.display = 'none';
  }
}

// Прокручуємо сторінку догори, коли натискаємо на кнопку
scrollTopBtn.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // Плавна анімація
  });
});
