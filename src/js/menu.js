// Modal menu
const openMenuBtn = document.querySelector('.open-header-menu-button');
const closeMenuBtn = document.querySelector('.close-button');
const menu = document.querySelector('.menu-header');
const menuLinks = document.querySelectorAll('.menu-header-link');

// Відкриття меню
if (openMenuBtn && menu) {
    openMenuBtn.addEventListener('click', function() {
        menu.classList.add('is-open'); 
        document.body.classList.add('body-scroll-lock'); // Блокуємо скрол сторінки
    });
}

// Закриття меню
if (closeMenuBtn && menu) {
    closeMenuBtn.addEventListener('click', function() {
        menu.classList.remove('is-open'); 
        document.body.classList.remove('body-scroll-lock'); // Відновлюємо скрол сторінки
    });
}

// Закриваємо меню після кліку на посилання
menuLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); 

        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            }); // Прокручуємо до секції
        }

        // Закриваємо модальне меню і розблоковуємо прокрутку сторінки
        menu.classList.remove('is-open'); 
        document.body.classList.remove('body-scroll-lock'); // Відновлюємо скрол сторінки
    });
});
