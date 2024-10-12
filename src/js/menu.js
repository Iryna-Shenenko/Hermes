// Modal menu
const openMenuBtn = document.querySelector('.open-header-menu-button');
const closeMenuBtn = document.querySelector('.close-button');
const menu = document.querySelector('.menu-header');
const menuLinks = document.querySelectorAll('.menu-header-link');

// Відкриття меню
if (openMenuBtn && menu) {
    openMenuBtn.addEventListener('click', function() {
        menu.classList.add('is-open'); // Додаємо клас для відкриття меню
    });
}

// Закриття меню
if (closeMenuBtn && menu) {
    closeMenuBtn.addEventListener('click', function() {
        menu.classList.remove('is-open'); // Видаляємо клас для закриття меню
    });
}

// Закриваємо меню після кліку на посилання
menuLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Вимкнути стандартний перехід 

        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({
            behavior: 'smooth'
        }); // Прокручуємо до секції
        }

menu.classList.remove('is-open'); // Закриваємо модальне меню
    });
});