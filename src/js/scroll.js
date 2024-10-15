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